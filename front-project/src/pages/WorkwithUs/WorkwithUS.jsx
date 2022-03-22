import React from 'react'
import { FormattedMessage  as T} from 'react-intl';
import './WorkwithUs.scss';

const WorkwithUS = () => {


  return (
    <div>
        <div className='intro'>
            <h2>
                <T id='workwithUS.intro' />
            </h2>

        </div>
        <h2><T id='workwithUS.offer'/></h2>
        <div className='offers'> 


             <div className='offers__img' >
                <a href="www.tecnoempleo.com">
                <img src="https://directivosygerentes.es/wp-content/uploads/2020/03/Ecommerce.jpg" alt="junior Developer" />
                <p>Junior Full Stack Developer</p>
                </a>
        </div>
            <div className='img' >
                <a href="www.tecnoempleo.com">
                <img src="https://esnova.com/wp-content/uploads/2021/03/almacen-transito-esnova.jpg" alt="junior Developer" />
                <p><T id='workwithUS.job' /></p>
                </a>
        </div>
         
        </div>
        
    </div>
  )
}

export default WorkwithUS