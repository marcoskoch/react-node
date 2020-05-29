export function createResidentRequest({
  name,
  birtday,
  phone,
  cpf,
  email,
  apartment_id,
}) {
  return {
    type: '@apartment/CREATE_RESIDENT_REQUEST',
    payload: { name, birtday, phone, cpf, email, apartment_id },
  };
}
