import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container, Content } from './styles';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';

export default function NewIncidents() {
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

        <form>
          <input placeholder="Titulo do caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="valor" />

          <Button type="submit">Cadastrar</Button>
        </form>
      </Content>
    </Container>
  );
}
