import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { ButtonContainer, DataForm, Form, Input, Label, ModifiedButton } from '../Clients/styles';
import { Container, Description, Title } from '../Home/styles';
import { Select, TextArea } from './styles';

export default function Products() {
 
  const [status, setStatus] = useState(false);
  const [productData, setproductData] = useState({
    category: "",
    type: "",
    description: "",
    price: "",
    stock:"",
  });

  function handleChange(e) {
    const field = e.target.getAttribute("id");
    const value = e.target.value;

    setproductData({
      ...productData,
      [field]: value,
    });

  }

  function setDataToStorage(e) {
    e.preventDefault();
    if (productData.name !== "" && productData.email !== "" && productData.cpf !=="" && productData.phone !==""){
      localStorage.setItem("productData", JSON.stringify(productData));
      setproductData({
        category: "",
        type: "",
        description: "",
        price: "",
        stock:"",
      });

      setStatus(true);
      setTimeout(() => {
        setStatus(false);
      }, 3000);

    } 

    else {
      alert('Preencha todos os campos corretamente')
    }
  }
  

  console.log(productData)
  return (
    <Container>
      <Title>Gestão de Produtos</Title>
      <Description>Secção para adição de produtos no LocalStorage.</Description>
      <Form onSubmit={setDataToStorage}>
        <DataForm>
          <Label htmlFor="category">Categoria</Label>
          <Select value={productData.categoria} onChange={handleChange}>
            <option selected disabled value="">Selecione a Categoria</option>
            <option value="eletrodomestico">Eletrodomésticos</option>
            <option value="móveis">Movéis</option>
            <option value="celulares">Celulares</option>
            <option value="outros">Outros</option>
          </Select>
        </DataForm>
        <DataForm>
          <Label htmlFor="type">Tipo</Label>
          <Input type="text" id='type' value={productData.type} onChange={handleChange} />
        </DataForm>
        <DataForm>
          <Label htmlFor="description">Descrição</Label>
          <TextArea type="text" id='description' value={productData.description} onChange={handleChange} />
        </DataForm>
        <DataForm>
          <Label htmlFor="price">Preço</Label>
          <Input type="number" id='price' value={productData.price} onChange={handleChange} />
        </DataForm>
        <DataForm>
          <Label htmlFor="stock">Estoque</Label>
          <Input type="number" id='stock' value={productData.stock} onChange={handleChange} />
        </DataForm>
        {status && <p>Produto cadastrado com sucesso!</p>}
        <ButtonContainer>
          <NavLink to='/'><ModifiedButton type='submit' backColor="transparent">Voltar</ModifiedButton></NavLink>
          <ModifiedButton type='submit' backColor="#117BB0" style={{width: "12rem"}}>Adicionar Produto</ModifiedButton>
        </ButtonContainer>
       
      </Form>
    </Container>
  )
}
