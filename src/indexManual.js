import React from 'react';
import ReactDom from 'react-dom';

const elementas = (
  <div>
    <h2> Sveikas pasauli</h2>
    <span>cia yra spano elementas</span>;
  </div>
);

ReactDom.render(elementas, document.getElementById('root'));
console.log(elementas);
