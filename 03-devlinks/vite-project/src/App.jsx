import './App.css'
import Link from './components/Link/Link'
import Perfil from './components/Perfil/Perfil'

function App() {

  return (
    <div id='app'>

      <Perfil fotoPerfil={"https://placehold.co/200x200"}> Kaique Spilari </Perfil>


      <div className='switch'>botão switch</div>

        <ul>
        <Link url={""}>Inscreva-se</Link>
        </ul>
        <ul>
        <Link url={""}>Minha playlist</Link>
        </ul>
        <ul>
        <Link url={""}>Me pague um café</Link>
        </ul>
        <ul>
        <Link url={""}>Conheça o curso DEV</Link>
        </ul>

      <div className='links'>  </div>

      <div className='sociallinks'>  </div>
      
       <ul>
        <Link url={"https://github.com/"}><íon-ícon name="logo-github"></íon-ícon></Link>
        <Link url={"https://www.Instagram.com/"}><íon-ícon name="logo-Instagram"></íon-ícon></Link>
        <Link url={"https://www.youtube.com/"}><íon-ícon name="logo-Youtube"></íon-ícon></Link>
        <Link url={"https://web.whatsapp.com/"}><íon-ícon name="logo-Whatsapp"></íon-ícon></Link>
      </ul>
        
      <Rodape> Kaique Spilari </Rodape>
    </div> 
  )
}

export default App
