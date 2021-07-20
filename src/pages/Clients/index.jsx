import React from 'react';
import Button from '../../components/Button';
import { Container, Description, Title } from '../Home/styles';
import { DataForm, Form, Input, Label } from './styles';

export default function Clients() {
  return (
    <Container>
      <Title>Gestão de Clientes</Title>
      <Description>Secção para adição de clientes no LocalStorage.</Description>
      <Form>
        <DataForm>
          <Label htmlFor="name">Nome</Label>
          <Input type="text" id='name'/>
        </DataForm>
        <DataForm>
          <Label htmlFor="cpf">CPF</Label>
          <Input type="number" id='cpf'/>
        </DataForm>
        <DataForm>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id='email'/>
        </DataForm>
        <DataForm>
          <Label htmlFor="phone">Telefone</Label>
          <Input type="number" id='phone'/>
        </DataForm>    
        <Button backColor="#117BB0">Adicionar Cliente</Button>
      </Form>
    </Container>
  )
}
