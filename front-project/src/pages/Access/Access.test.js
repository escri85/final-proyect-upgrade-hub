import React from "react";
import '@testing-library/jest-dom/extend-expect'
import{render, screen,fireEvent,waitFor }from '@testing-library/react'
import Access from "./Access";
import { connect } from "formik";


// beforeEach(()=>{
//     render(<Access/> )
//   })


  
test('render titles component Access',async()=>{
    render(connect(<Access/>) )

    const inicioSesion = screen.findAllByText(/iniciar sesion/i)
    await waitFor(()=>expect(inicioSesion))

  const inputEmail = screen.findAllByText(/crear cuenta/i)
   await waitFor(()=>expect(inputEmail))
  //button

  const buttonIniciar = screen.queryByRole('button',{name:/iniciar sesion/i})
 await waitFor(()=> expect(buttonIniciar))

})