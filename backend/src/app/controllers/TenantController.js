import Tenant from '../models/Tenant';

class TenantController {
  async index(req, res) {
    const { apartment_id } = req.query;

    const tenants = await Tenant.findAll({
      where: {
        apartment_id,
      },
      order: ['name'],
    });

    return res.json(tenants);
  }

  async find(req, res) {
    const tenant = await Tenant.findByPk(req.params.id);

    return res.json(tenant);
  }

  async update(req, res) {
    const { id } = req.body;
    const tenant = await Tenant.findByPk(id);

    await tenant.update(req.body);

    return res.json(tenant);
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
