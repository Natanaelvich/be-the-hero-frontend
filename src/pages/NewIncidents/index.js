import React, { useState } from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { Container, Content } from './styles';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';

export default function NewIncidents() {
  const history = useHistory();
  const ongId = localStorage.getItem('ongId');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(null);

  async function handleIncidentRegister(e) {
    e.preventDefault();

    try {
      await api.post(
        '/ongs/incidents',
        {
          title,
          description,
          value,
        },
        {
          headers: {
            ong_id: ongId,
          },
        }
      );

      toast.success('caso cadastrado');
      history.push('/profile');
    } catch (err) {
      toast.error('erro ao cadastrar caso');
    }
  }
  return (
    <Container>
      <Content>
        <section>
          <img src={logo} alt="be the hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link to="/profile">
            <MdArrowBack size={28} color="#e02041" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleIncidentRegister}>
          <input
            value={title}
            onChange={text => {
              setTitle(text.target.value);
            }}
            placeholder="Titulo do caso"
          />
          <textarea
            value={description}
            onChange={text => {
              setDescription(text.target.value);
            }}
            placeholder="Descrição"
          />
          <input
            value={value}
            onChange={text => {
              setValue(text.target.value);
            }}
            placeholder="valor"
          />

          <Button type="submit">Cadastrar</Button>
        </form>
      </Content>
    </Container>
  );
}
