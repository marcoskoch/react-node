import Tenant from '../models/Tenant';

class TenantController {
  async index(req, res) {
    const tenants = await Tenant.findAll({
      where: {
        apartment_id: req.params.apartmet_id,
      },
      order: ['name'],
    });

    return res.json(tenants);
  }

  async store(req, res) {
    const tenantExist = await Tenant.findOne({
      where: { email: req.body.email },
    });

    if (tenantExist) {
      return res.status(400).json({ error: 'Tenant already exists.' });
    }

    const tenant = await Tenant.create(req.body);

    return res.json(tenant);
  }

  async delete(req, res) {
    const tenant = await Tenant.findByPk(req.params.id);

    tenant.destroy();

    return res.json({ success: true });
  }
}

export default new TenantController();
