import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Title } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Dashboard</Title>
    </>
  )
};

export default Dashboard;
