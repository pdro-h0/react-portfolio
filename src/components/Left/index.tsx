import * as C from './styles'

import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

import profilePhoto from '../../assets/38.png'
import curriculo from '../../assets/Currículum.pdf'

export const Left = ()=>{
    return(
        <C.Container>
            <img src={profilePhoto} alt="Foto de perfil" />
            <h3>Pedro Henrique</h3>
            <p>Front end Junior</p>
            <a href={curriculo} target="_blank"
            download="Currículo Pedro Oliveira.pdf" type="application/pdf">Download CV</a>

            <div className="links">
                <C.List>
                    <li><a href="https://github.com/pdro-h0" target='_blank'>
                        <GithubLogo size={30}/>
                    </a></li>
                    <li><a href="https://www.instagram.com/pdro_h0/" target="_blank">
                        <InstagramLogo size={30}/>
                    </a></li>
                    <li><a href="https://www.linkedin.com/in/pedro-h-b7547588/" target="_blank">
                        <LinkedinLogo size={30}/>
                    </a></li>
                </C.List>
            </div>
        </C.Container>
    )
}