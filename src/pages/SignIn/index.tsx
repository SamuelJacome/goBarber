import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

function signIn() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <form>
          <h1>faça seu Logon</h1>
          <input placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <a href="/">
            <FiLogIn />
            Criar conta
          </a>
        </form>
      </Content>
      <Background />
    </Container>
  );
}

export default signIn;
