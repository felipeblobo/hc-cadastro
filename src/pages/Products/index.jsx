import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ButtonContainer,
  DataForm,
  Form,
  FormatedInput,
  Input,
  Label,
  ModifiedButton,
} from "../Clients/styles";
import { Container, Description, Title } from "../Home/styles";
import { Select, Success, TextArea } from "./styles";

export default function Products() {
  const [status, setStatus] = useState(false);
  const [productData, setproductData] = useState({
    category: "",
    type: "",
    description: "",
    price: "",
    stock: "",
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
    if (
      productData.category !== "" &&
      productData.type !== "" &&
      productData.description !== "" &&
      productData.price !== "" &&
      productData.stock !== ""
    ) {
      localStorage.setItem(
        `productData${productData.type}`,
        JSON.stringify(productData)
      );
      setproductData({
        category: "",
        type: "",
        description: "",
        price: "",
        stock: "",
      });

      setStatus(true);
      setTimeout(() => {
        setStatus(false);
      }, 3000);
    } else {
      alert("Preencha todos os campos corretamente");
    }
  }

  console.log(productData.category)

  return (
    <Container>
      <Title>Gestão de Produtos</Title>
      <Description>Secção para adição de produtos no LocalStorage.</Description>
      {status && <Success>Produto cadastrado com sucesso!</Success>}
      <Form onSubmit={setDataToStorage}>
        <DataForm>
          <Label htmlFor="category">Categoria</Label>
          <Select id='category' value={productData.category} onChange={handleChange}>
            <option disabled value='' defaultValue>
              Selecione a Categoria
            </option>
            <option value="eletrodomestico">Eletrodomésticos</option>
            <option value="móveis">Movéis</option>
            <option value="celulares">Celulares</option>
            <option value="outros">Outros</option>
          </Select>
        </DataForm>
        <DataForm>
          <Label htmlFor="type">Tipo</Label>
          <Input
            placeholder="Tipo do produto"
            type="text"
            id="type"
            value={productData.type}
            onChange={handleChange}
            required
          />
        </DataForm>
        <DataForm>
          <Label htmlFor="description">Descrição</Label>
          <TextArea
            placeholder="Descrição com características e funcionalidades"
            type="text"
            id="description"
            value={productData.description}
            onChange={handleChange}
            required
          />
        </DataForm>
        <DataForm>
          <Label htmlFor="price">Preço</Label>
          <FormatedInput
            thousandSeparator={true} 
            prefix={'R$ '}
            placeholder="Digite somente os números"
            id="price"
            value={productData.price}
            onChange={handleChange}
            required
          />
        </DataForm>
        <DataForm>
          <Label htmlFor="stock">Estoque</Label>
          <Input
            placeholder="Estoque em números inteiros"
            type="number"
            id="stock"
            value={productData.stock}
            onChange={handleChange}
            required
          />
        </DataForm>

        <ButtonContainer>
          <NavLink to="/">
            <ModifiedButton type="submit" backColor="transparent">
              Voltar
            </ModifiedButton>
          </NavLink>
          <ModifiedButton
            type="submit"
            backColor="#FD5A57"
            style={{ width: "12rem" }}
          >
            Adicionar Produto
          </ModifiedButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
}
