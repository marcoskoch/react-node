import Apartment from '../models/Apartment';
import Tenant from '../models/Tenant';

class ApartmentController {
  async index(req, res) {
    const apartments = await Apartment.findAll({
      where: {
        user_id: req.userId,
      },
      order: ['block', 'number'],
    });

    return res.json(apartments);
  }

  async store(req, res) {
    const tenantExist = await Tenant.findOne({
      where: { email: req.body.tenant.email },
    });

    if (tenantExist) {
      return res.status(400).json({ error: 'Tenant already exists.' });
    }

    const { block, number, tenant } = req.body;

    const apartmet = await Apartment.create({
      block,
      number,
      user_id: req.userId,
    });
    const { id } = apartmet;

    await Tenant.create({ apartment_id: id, accountable: true, ...tenant });

    return res.json(apartmet);
  }

  async delete(req, res) {
    const apartment = await Apartment.findByPk(req.params.id);

    if (apartment.user_id !== req.userId) {
      return res.status(401).json({
        error: "You don't have permission to delete this apartmet.",
      });
    }

    apartment.destroy({ cascade: true });

    return res.json({ sucess: true });
  }
}

export default new ApartmentController();
