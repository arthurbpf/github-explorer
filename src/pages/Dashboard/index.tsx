import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Form, Title, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="github_explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="" alt="Profile" />
          <div>
            <strong>repository/name</strong>
            <p>descricao</p>
          </div>

          <FiChevronRight size={30} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
