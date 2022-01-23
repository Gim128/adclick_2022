import {React, useState} from 'react';
import '../Card/Card.css';
import { useState } from 'react';

function Card() {

    const [Name, setName] = useState('Your Name');
    const [Price, setPrice] = useState('$25');
    const [Description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada odio mi eu.');

  return (
  <div className='card'>
      <div className='upper-conatiner'>
        <div className='image-container'>
            <img src='' alt='' />
        </div>
      </div>
      <div className='lower-conatiner'>
        <h3> {Name} </h3>
        <h3> {Price} </h3>
        <p> {Description} </p>
        <button>BUY</button>
      </div>
  </div>
  )
}

export default Card;
