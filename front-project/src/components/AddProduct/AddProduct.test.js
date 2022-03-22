import React from "react";
import '@testing-library/jest-dom/extend-expect'
import{render, screen}from '@testing-library/react'
import AddProduct from './AddProduct'


test('render content',()=>{
  render(<AddProduct/> )

  const title = screen.getByText(/Edita tu articulo/i)
  expect(title).toBeInTheDocument()
})