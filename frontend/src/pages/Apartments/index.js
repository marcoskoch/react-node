import React, { useEffect, useState } from 'react';
import {
  MdModeEdit,
  MdDelete,
  MdKeyboardArrowRight,
  MdPersonAdd,
  MdAddCircle,
} from 'react-icons/md';
import history from '~/services/history';
import api from '~/services/api';

import { Container, Apartment } from './styles';

function Apartments() {
  const [apartments, setApartments] = useState([]);

  async function deleteApartment(apartment_id) {
    await api.delete(`apartments/${apartment_id}`);
    history.go(0);
  }

  useEffect(() => {
    async function loadApartments() {
      const response = await api.get('apartments');

      const data = response.data.map((apartment) => {
        return {
          number: apartment.number,
          block: apartment.block,
          id: apartment.id,
        };
      });

      setApartments(data);
    }

    loadApartments();
  }, []);
  return (
    <Container>
      <header>
        <h1>Apartamentos</h1>
        <button
          type="button"
          onClick={() => {
            history.push('/apartment');
          }}
        >
          <MdAddCircle size={32} />
        </button>
      </header>
      <ul>
        {apartments.map((apartment) => (
          <Apartment key={apartment.id}>
            <strong>{apartment.number}</strong>
            <span>{apartment.block}</span>
            <button
              type="button"
              onClick={() => {
                history.push(`/apartmentEdit/${apartment.id}`);
              }}
            >
              <MdModeEdit size={24} />
            </button>
            <button
              type="button"
              onClick={() => {
                history.push(`/resident/${apartment.id}`);
              }}
            >
              <MdPersonAdd size={24} />
            </button>
            <button
              type="button"
              onClick={() => {
                deleteApartment(apartment.id);
              }}
            >
              <MdDelete size={24} />
            </button>
            <button
              type="button"
              onClick={() => {
                history.push(`/residents/${apartment.id}`);
              }}
            >
              <MdKeyboardArrowRight size={24} />
            </button>
          </Apartment>
        ))}
      </ul>
    </Container>
  );
}

export default Apartments;
