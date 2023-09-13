import './global.scss';
import React from 'react';
import cloud-1 from './assets/cloud-1.png';

function App() {
  return(
    <main>
      <div className='background'>
        <img src={cloud-1} alt='' />
      </div>
      <nav className='navbar'>
        <h1>navbar</h1>
      </nav>
      <div className='principal'>
        <h1>principal</h1>
      </div>
      <footer>
        <h1>Redes Sociais</h1>
      </footer>
    </main>
  )
}

export default App;
