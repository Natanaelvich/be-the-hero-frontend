import React from 'react';
import { MdDelete } from 'react-icons/md';

import { List } from './styles';

export default function IncidentsList({ data, handleDelete }) {
  return (
    <List>
      {data.map(incident => (
        <li key={incident.id}>
          <strong>Caso: </strong>
          <p>{incident.title}</p>

          <strong>Descrição: </strong>
          <p>{incident.description}</p>

          <strong>Valor:</strong>
          <p>
            {' '}
            {Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL',
            }).format(incident.value)}
          </p>

          <button onClick={() => handleDelete(incident.id)} type="button">
            <MdDelete size={28} color="#444" />
          </button>
        </li>
      ))}
    </List>
  );
}
