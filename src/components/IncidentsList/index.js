import React from 'react';
import { MdDelete } from 'react-icons/md';

import { List } from './styles';

export default function IncidentsList() {
  return (
    <List>
      <li>
        <strong>Caso: </strong>
        <p>Caso teste</p>

        <strong>Descrição: </strong>
        <p>Descrição teste</p>

        <strong>Valor:</strong>
        <p>R$ 120,00</p>

        <button type="button">
          <MdDelete size={28} color="#444" />
        </button>
      </li>
      <li>
        <strong>Caso: </strong>
        <p>Caso teste</p>

        <strong>Descrição: </strong>
        <p>Descrição teste</p>

        <strong>Valor:</strong>
        <p>R$ 120,00</p>

        <button type="button">
          <MdDelete size={28} color="#444" />
        </button>
      </li>
      <li>
        <strong>Caso: </strong>
        <p>Caso teste</p>

        <strong>Descrição: </strong>
        <p>Descrição teste</p>

        <strong>Valor:</strong>
        <p>R$ 120,00</p>

        <button type="button">
          <MdDelete size={28} color="#444" />
        </button>
      </li>
      <li>
        <strong>Caso: </strong>
        <p>Caso teste</p>

        <strong>Descrição: </strong>
        <p>Descrição teste</p>

        <strong>Valor:</strong>
        <p>R$ 120,00</p>

        <button type="button">
          <MdDelete size={28} color="#444" />
        </button>
      </li>
      <li>
        <strong>Caso: </strong>
        <p>Caso teste</p>

        <strong>Descrição: </strong>
        <p>Descrição teste</p>

        <strong>Valor:</strong>
        <p>R$ 120,00</p>

        <button type="button">
          <MdDelete size={28} color="#444" />
        </button>
      </li>
    </List>
  );
}
