import React from 'react';
import { MdDelete } from 'react-icons/md';

import { List } from './styles';

export default function IncidentsList({ data }) {
  return (
    <List>
      {data.map(incident => (
        <li>
          <strong>Caso: </strong>
          <p>{incident.title}</p>

          <strong>Descrição: </strong>
          <p>{incident.description}</p>

          <strong>Valor:</strong>
          <p>R$ {incident.value}</p>

          <button type="button">
            <MdDelete size={28} color="#444" />
          </button>
        </li>
      ))}
    </List>
  );
}
