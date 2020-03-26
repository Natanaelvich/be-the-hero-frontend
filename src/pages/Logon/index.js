import React, { useState } from 'react';
import { MdExitToApp } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services/api';

import logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import { Container, Form } from './styles';
import Button from '../../components/Button';

export default function Logon() {
  const history = useHistory();

  const [id, setId] = useState('');

  async function handleLogon(e) {
    e.preventDefault();

    try {
      const response = await api.post('/session', {
        id,
      });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      toast.success('Logado');
      history.push('/profile');
    } catch (error) {
      toast.error('falha ao realizar login');
    }
  }

  return (
    <Container>
      <Form>
        <img src={logo} alt="be the hero" />
        <form onSubmit={handleLogon}>
          <h1>Faça seu login</h1>

          <input
            value={id}
            onChange={text => setId(text.target.value)}
            placeholder="Sua ID"
          />
          <Button type="submit">Entrar</Button>

          <Link to="/register">
            <MdExitToApp size={28} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </Form>

      <img src={heroesImg} alt="heroes" />
    </Container>
  );
}
