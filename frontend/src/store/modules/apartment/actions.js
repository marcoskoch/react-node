export function createApartmentRequest({
  number,
  block,
  name,
  birtday,
  phone,
  cpf,
  email,
}) {
  return {
    type: '@apartment/CREATE_APARTMENT_REQUEST',
    payload: { number, block, name, birtday, phone, cpf, email },
  };
}
