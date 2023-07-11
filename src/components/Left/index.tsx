import * as C from "./styles";

import {
  BiLogoReact,
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";

import { SiSequelize, SiExpress } from "react-icons/si";

import profilePhoto from "../../assets/38.png";
import curriculo from "../../assets/Currículum.pdf";

export const Left = () => {
  return (
    <C.Container>
      <img src={profilePhoto} alt="Foto de perfil" />
      <h3>Pedro Henrique</h3>
      <p>Full Stack Júnior</p>
      <a
        href={curriculo}
        target="_blank"
        download="Currículo Pedro Oliveira.pdf"
        type="application/pdf"
      >
        Download CV
      </a>

      <div className="links">
        <C.ListSocial>
          <li>
            <a href="https://github.com/pdro-h0" target="_blank">
              <BiLogoGithub size={30} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/pdro_h0/" target="_blank">
              <BiLogoInstagram size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/pedro-h-b7547588/"
              target="_blank"
            >
              <BiLogoLinkedin size={30} />
            </a>
          </li>
        </C.ListSocial>

        <hr />

        <C.ListTechs>
          <li>
            <BiLogoReact size={30} title="ReactJs" />
          </li>
          <li>
            <BiLogoTypescript size={30} title="TypeScript" />
          </li>
          <li>
            <BiLogoJavascript size={30} title="JavaScript" />
          </li>
          <li>
            <BiLogoHtml5 size={30} title="HTML5" />
          </li>
          <li>
            <BiLogoCss3 size={30} title="CSS3" />
          </li>
          <li>
            <BiLogoNodejs size={30} title="NodeJs" />
          </li>
          <li>
            <BiLogoPostgresql size={30} title="Postgresql" />
          </li>
          <li>
            <SiSequelize size={30} title="Sequelize" />
          </li>
          <li>
            <SiExpress size={30} title="Express" />
          </li>
        </C.ListTechs>
      </div>
    </C.Container>
  );
};
