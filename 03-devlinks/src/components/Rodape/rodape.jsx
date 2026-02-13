import React from 'react'
import Rodape from "./Rodape.module.css" 

const Rodape = ({children}) => {
  return (
    <footer>
      <p> Feito com AMOR por <a href="https://github.com/">{children}</a>
        </p>
    </footer>
  )
}

export default Rodape