
import '@testing-library/jest-dom/extend-expect'
import{render, screen,waitFor }from '@testing-library/react'

import axios from "axios";
import { connect } from 'react-redux';
import WomenShoesPage from './WomenShoesPage';


jest.mock('axios')
beforeEach(()=>{
    axios.get.mockClear()
})
test('should search man clothes', async ()=>{
render(connect(<WomenShoesPage/>))
    axios.get.mockReturnValueOnce({
        props:{data:[{
            id:'6231ba709deed210cc8c79f9'
        }]}
    })
})