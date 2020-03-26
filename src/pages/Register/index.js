import React, { useState } from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { Container, Content, InputGroup } from './styles';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';

export default function Register() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  async function handleRegister(e) {
    e.preventDefault();

    try {
      const response = await api.post('/ongs', {
        name,
        email,
        whatsapp,
        city,
        uf,
      });
      toast.success('cadastro realizado com sucesso');
      alert(`Seu Id de acesso :${response.data.id}`);
      history.push('/');
    } catch (error) {
      toast.error('falha no cadastro tente mais tarde');
    }
  }
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

        <form onSubmit={handleRegister}>
          <input
            value={name}
            onChange={text => setName(text.target.value)}
            placeholder="Nome da ONG"
          />
          <input
            value={email}
            onChange={text => setEmail(text.target.value)}
            placeholder="E-mail"
            type="email"
          />
          <input
            value={whatsapp}
            onChange={text => setWhatsapp(text.target.value)}
            placeholder="Whatsapp"
          />

          <InputGroup>
            <input
              value={city}
              onChange={text => setCity(text.target.value)}
              placeholder="Cidade"
            />
            <input
              value={uf}
              onChange={text => setUf(text.target.value)}
              placeholder="UF"
              style={{ width: 80 }}
            />
          </InputGroup>

          <Button type="submit">Cadastrar</Button>
        </form>
      </Content>
    </Container>
  );
}
