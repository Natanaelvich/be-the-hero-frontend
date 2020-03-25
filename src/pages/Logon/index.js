import React from 'react';
import { MdExitToApp } from 'react-icons/md';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import { Container, Form } from './styles';
import Button from '../../components/Button';

export default function Logon() {
  return (
    <Container>
      <Form>
        <img src={logo} alt="be the hero" />
        <form>
          <h1>Faça se logon</h1>

          <input placeholder="Sua ID" />
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
