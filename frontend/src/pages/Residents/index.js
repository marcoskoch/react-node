import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
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
    if (residents.length > 1) {
      await api.delete(`tenants/${resident_id}`);
      history.go(0);
    } else {
      toast.error('O apartamento precisa de no mínimo 1 morador.');
    }
  }

  useEffect(() => {
    async function loadResidents() {
      const response = await api.get(`tenants`, {
        params: { apartment_id: id },
      });

      setResidents(response.data);
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
            <p>{resident.email}</p>
            <p>
              {format(
                new Date(resident.birtday),
                "'Aniversário ' d 'de' MMMM",
                {
                  locale: pt,
                }
              )}
            </p>
            <p>{`Telefone: ${resident.phone}`}</p>
            <p>{`CPF: ${resident.cpf}`}</p>
            {resident.accountable && <span>Responsável</span>}
            <button
              type="button"
              onClick={() => {
                history.push(`/resident-edit/${resident.id}`);
              }}
            >
              <MdModeEdit size={24} />
            </button>
            <button
              type="button"
              onClick={() => {
                if (resident.accountable) {
                  toast.error('Para excluir outro deve ser responsável.');
                } else {
                  deleteResident(resident.id);
                }
              }}
            >
              <MdDelete size={24} />
            </button>
            {/* <button type="button" onClick={() => {}}>
              Tornar responsável
            </button> */}
          </Resident>
        ))}
      </ul>
    </Container>
  );
}

export default Residents;
