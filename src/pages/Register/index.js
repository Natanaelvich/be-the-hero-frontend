import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Container, Content, InputGroup } from './styles';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';

export default function Register() {
  return (
    <Container>
      <Content>
        <section>
          <img src={logo} alt="be the hero" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro,entre na plataforma e ajude pessoas a enconstrarem
            os casos da sua ONG.
          </p>

          <Link to="/">
            <MdArrowBack size={28} color="#e02041" />
            Já tenho cadastro
          </Link>
        </section>

        <form>
          <input placeholder="Nome da ONG" />
          <input placeholder="E-mail" type="email" />
          <input placeholder="Whatsapp" />

          <InputGroup>
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </InputGroup>

          <Button type="submit">Cadastrar</Button>
        </form>
      </Content>
    </Container>
  );
}
