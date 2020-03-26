import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdPowerSettingsNew } from 'react-icons/md';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { Container, Logout } from './styles';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import IncidentsList from '../../components/IncidentsList';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');

  useEffect(() => {
    async function loadIncidents() {
      const response = await api.get('/ongs/profile/incidents', {
        headers: {
          ong_id: ongId,
        },
      });
      setIncidents(response.data);
    }
    loadIncidents();
  }, [ongId]);

  async function handleDelete(id) {
    try {
      await api.delete(`/ongs/incidents/${id}`, {
        headers: {
          ong_id: ongId,
        },
      });
      setIncidents(incidents.filter(inc => inc.id !== id));
      toast.info('deletado');
    } catch (error) {
      toast.error('erro ao deletar');
    }
  }
  return (
    <Container>
      <header>
        <img src={logo} alt="be the hero" />
        <span>Bem vinda, {ongName}</span>

        <Link to="/incidents/new">
          <Button type="submit">Cadastrar novo caso</Button>
        </Link>

        <Logout type="button">
          <MdPowerSettingsNew size={28} color="#e02041" />
        </Logout>
      </header>

      {incidents.length ? (
        <>
          <h1>Casos cadastrados</h1>
          <IncidentsList data={incidents} handleDelete={handleDelete} />
        </>
      ) : (
        <h2>Nenhum caso cadastrado</h2>
      )}
    </Container>
  );
}
