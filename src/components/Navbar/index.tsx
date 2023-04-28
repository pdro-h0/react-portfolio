import * as C from './styles'

import { Link } from 'react-router-dom'

export const Navbar = ()=>{
    return(
        <C.Container>
            <Link className='link' to="/">Sobre Mim</Link>
            <Link className='link' to="/projects">Projetos</Link>
        </C.Container>
    )
}