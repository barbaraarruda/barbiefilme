import './global.scss';
import cloud01 from './assets/cloud01.png';
import cloud02 from './assets/cloud02.png';
import cloud03 from './assets/cloud03.png';
import cloud04 from './assets/cloud03.png';
import cloud05 from './assets/cloud03.png';
import cloud06 from './assets/cloud03.png';
import background from './assets/background.png';
import logo from './assets/logo.png';
import trailer from './assets/trailer.jpg'; 


function App() {
  return(
    <main>
      <div className='background'>
        <img className="cloud" src={cloud01} alt='nuvem branca com detalhes azuis' />
        <img className="cloud" src={cloud02} alt='nuvem branca com detalhes azuis' />
        <img className="cloud" src={cloud03} alt='nuvem branca com detalhes azuis' />
        <img className="cloud" src={cloud04} alt='nuvem branca com detalhes azuis' />
        <img className="cloud" src={cloud05} alt='nuvem branca com detalhes azuis' />
        <img className="cloud" src={cloud06} alt='nuvem branca com detalhes azuis' />
        <img className="barbie" src={background} alt='imagem da barbie com o ken no carro' />
      </div>
      <nav className='navbar'>
        <a href='https://g.co/kgs/N41rT3'>Sinopse</a>
        <a href='https://g.co/kgs/N41rT3'>Vídeo</a>
        <a href='https://www.barbie-themovie.com/'><img src={logo} alt='logotipo barbie o filme'></img></a>
        <a href='https://www.barbie-themovie.com/'>Galeria</a>
        <a href='https://g.co/kgs/N41rT3'>Onde assistir</a>
      </nav>
      <div className='principal'>
        <div className='trailer'>
          <strong>ASSISTA O TRAILER</strong>
          <picture>
            <img src={trailer} alt='imagem contendo um frame do trailer do filme barbie'></img>
          </picture>
        </div>
        <a href='https://g.co/kgs/BNjwps' className='margot'>Margot Robbie</a>
        <a href='https://g.co/kgs/U4dK5a' className='ryan'>Ryan Gosling</a>
      </div>
      <footer>
        <a href="https://www.facebook.com/BarbieTheMovie">FACEBOOK</a>
        <a href="https://twitter.com/barbiethemovie">TWITTER</a>
        <a href="https://www.instagram.com/barbiethemovie/">INSTAGRAM</a>
        <a href="https://www.tiktok.com/@barbiethemovie">TIKTOK</a>
        <a href="https://saturncode.vercel.app">&copy; 2023 ☆ SATURN CODE</a>
      </footer>
    </main>
  )
}

export default App;
