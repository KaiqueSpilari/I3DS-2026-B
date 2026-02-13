import './App.css'
import Link from './components/Link/Link'
import Perfil from './components/Perfil/Perfil'
import Rodape from './components/Rodape/rodape'
import SocialLink from './components/SocialLink/SocialLink'

function App() {

  return (
    <div id='App'>

      <Perfil fotoPerfil={"https://placehold.co/200x200"}> Kaique Spilari </Perfil>


      <div className='switch'>botão switch</div>


      <div className='Link'> 
     <ul>
        <Link url={""}>Inscreva-se</Link>
        <Link url={""}>Minha playlist</Link>
        <Link url={""}>Me pague um café</Link>
        <Link url={""}>Conheça o curso DEV</Link>
    </ul>
 </div>

      <div className='sociallinks'>  
      
       <ul>
        <SocialLink url={"https://github.com/"} icon="logo-Github"></SocialLink>
        <SocialLink url={"https://www.Instagram.com/"} icon="logo-Instagram"></SocialLink>
        <SocialLink url={"https://www.youtube.com/"} icon="logo-Youtube"></SocialLink>
        <SocialLink url={"https://web.whatsapp.com/"} icon="logo-Whatsapp"></SocialLink>
      </ul>
      </div>
        
      <Rodape> Kaique Spilari </Rodape>
    </div> 
  )
}

export default App
