import React, { useEffect, useState } from 'react';
import {
  MdModeEdit,
  MdDelete,
  MdKeyboardArrowRight,
  MdPersonAdd,
  MdAddCircle,
} from 'react-icons/md';
import api from '~/services/api';

import { Container, Apartment } from './styles';

function Apartments() {
  const [apartments, setApartments] = useState([]);

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
        <button type="button" onClick={() => {}}>
          <MdAddCircle size={32} />
        </button>
      </header>
      <ul>
        {apartments.map((apartment) => (
          <Apartment key={apartment.id}>
            <strong>{apartment.number}</strong>
            <span>{apartment.block}</span>
            <button type="button" onClick={() => {}}>
              <MdModeEdit size={24} />
            </button>
            <button type="button" onClick={() => {}}>
              <MdPersonAdd size={24} />
            </button>
            <button type="button" onClick={() => {}}>
              <MdDelete size={24} />
            </button>
            <button type="button" onClick={() => {}}>
              <MdKeyboardArrowRight size={24} />
            </button>
          </Apartment>
        ))}
      </ul>
    </Container>
  );
}

export default Apartments;