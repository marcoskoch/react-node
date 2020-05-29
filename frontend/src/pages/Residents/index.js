import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  MdModeEdit,
  MdDelete,
  MdKeyboardArrowRight,
  MdPersonAdd,
} from 'react-icons/md';
import history from '~/services/history';
import api from '~/services/api';

import { Container, Resident } from './styles';

function Residents() {
  const [residents, setResidents] = useState([]);
  const { id } = useParams();

  async function deleteResident(resident_id) {
    await api.delete(`tenants/${resident_id}`);
    history.go(0);
  }

  useEffect(() => {
    async function loadResidents() {
      const response = await api.get(`tenants/${id}`);

      const data = response.data.map((resident) => {
        return {
          name: resident.name,
          email: resident.email,
          id: resident.id,
        };
      });

      setResidents(data);
    }

    loadResidents();
  }, []);
  return (
    <Container>
      <header>
        <h1>Apartamento</h1>
        <button
          type="button"
          onClick={() => {
            history.push(`/resident/${id}`);
          }}
        >
          <MdPersonAdd size={32} />
        </button>
      </header>
      <ul>
        {residents.map((resident) => (
          <Resident key={resident.id}>
            <strong>{resident.name}</strong>
            <span>{resident.email}</span>
            <button type="button" onClick={() => {}}>
              <MdModeEdit size={24} />
            </button>
            <button
              type="button"
              onClick={() => {
                deleteResident(resident.id);
              }}
            >
              <MdDelete size={24} />
            </button>
            <button type="button" onClick={() => {}}>
              <MdKeyboardArrowRight size={24} />
            </button>
          </Resident>
        ))}
      </ul>
    </Container>
  );
}

export default Residents;
