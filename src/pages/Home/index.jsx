import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <NavLink to='/clientes'><button>Clientes</button></NavLink>
      <NavLink to='/produtos'><button>Produtos</button></NavLink>
    </>
  )
}
