import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdPowerSettingsNew } from 'react-icons/md';
import api from '../../services/api';

import { Container, Logout } from './styles';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import IncidentsList from '../../components/IncidentsList';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    async function loadIncidents() {
      const response = await api.get('/ongs/incidents');
      setIncidents(response.data);
    }
    loadIncidents();
  }, []);
  return (
    <Container>
      <header>
        <img src={logo} alt="be the hero" />
        <span>Bem vinda, APAD</span>

        <Link to="/incidents/new">
          <Button type="submit">Cadastrar novo caso</Button>
        </Link>

        <Logout type="button">
          <MdPowerSettingsNew size={28} color="#e02041" />
        </Logout>
      </header>

      <h1>Casos cadastrados</h1>

      <IncidentsList data={incidents} />
    </Container>
  );
}
