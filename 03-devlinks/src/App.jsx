import './App.css'
import Link from './components/Link/Link'
import Perfil from './components/Perfil/Perfil'
import Rodape from './components/Rodape/rodape'
import SocialLink from './components/SocialLink/SocialLink'

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
        <SocialLink url={"https://github.com/"} icon="logo-Github"></SocialLink>
        <SocialLink url={"https://www.Instagram.com/"} icon="logo-Instagram"></SocialLink>
        <SocialLink url={"https://www.youtube.com/"} icon="logo-Youtube"></SocialLink>
        <SocialLink url={"https://web.whatsapp.com/"} icon="logo-Whatsapp"></SocialLink>
      </ul>
        
      <Rodape> Kaique Spilari </Rodape>
    </div> 
  )
}

export default App
