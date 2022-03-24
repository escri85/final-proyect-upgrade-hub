import React from "react";
import '@testing-library/jest-dom/extend-expect'
import{render, screen,fireEvent}from '@testing-library/react'
import AddProduct from './AddProduct'

beforeEach(()=>{
  render(<AddProduct/> )
})

test('render title component AddProduct',()=>{

  const title = screen.getByText(/Edita tu articulo/i)
  expect(title).toBeInTheDocument()

})
test('render  form elements ',()=>{
  //placeholdeer
  const inputPrecio = screen.queryByPlaceholderText(/precio/i)
  expect(inputPrecio).toBeInTheDocument()
  const inputUnidades = screen.queryByPlaceholderText(/unidades/i)
  expect(inputUnidades).toBeInTheDocument()
//buttons
const buttonAddProduct = screen.queryByRole('button',{name:/subir producto/i})
expect(buttonAddProduct).toBeInTheDocument()


})
// test('',()=>{})

