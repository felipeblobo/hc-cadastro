import React from 'react'
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button';
import { Container, Description, Title } from './styles';

export default function Home() {
  return (
    <Container>
      <Title>Gestão de Cadastros</Title>
      <Description>Sistema para gestão de cadastros. Clique em Clientes para adicionar clientes na base de dados ou acione o botão de para adicionar produtos na base de dados.</Description>
      <div>
        <NavLink to='/clientes'><Button backColor='#117BB0'>Clientes</Button></NavLink>
        <NavLink to='/produtos'><Button backColor='#FD5A57'>Produtos</Button></NavLink>
      </div>
    </Container>
  )
}
