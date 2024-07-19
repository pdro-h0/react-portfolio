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
  BiLogoTailwindCss, 
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";

import { TbBrandNextjs } from "react-icons/tb";

import { SiExpress, SiVitest, SiFastify,    } from "react-icons/si";

import profilePhoto from "../../assets/profile-pic.webp";
import curriculo from "../../assets/curriculo.pdf";

export const Left = () => {
  return (
    <C.Container>
      <img src={profilePhoto} alt="Foto de perfil" />
      <h3>Pedro Henrique</h3>
      <p>Full Stack Júnior</p>
      <a
        href={curriculo}
        target="_blank"
        rel="noopener noreferrer"
        download="Currículo Pedro Oliveira.pdf"
        type="application/pdf"
      >
        Download CV
      </a>

      <div className="links">
        <C.ListSocial>
          <li>
            <a
              href="https://github.com/pdro-h0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="link to my github"
            >
              <BiLogoGithub size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/pdro_h0/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="link to my instagram"
            >
              <BiLogoInstagram size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/pedro-h-b7547588/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="link to my linkedin"
            >
              <BiLogoLinkedin size={30} />
            </a>
          </li>
        </C.ListSocial>

        <hr />

        <C.ListTechs>
          <li>
            <TbBrandNextjs size={30} title="NextJs" />
          </li>
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
            <BiLogoTailwindCss size={30} title="TailwindCss" />
          </li>
          <li>
            <BiLogoNodejs size={30} title="NodeJs" />
          </li>
          <li>
            <BiLogoPostgresql size={30} title="Postgresql" />
          </li>
          <li>
            <SiExpress size={30} title="Express" />
          </li>
          <li>
            <SiFastify size={30} title="Fastify" />
          </li>
          <li>
            <SiVitest size={30} title="Vitest" />
          </li>
        </C.ListTechs>
      </div>
    </C.Container>
  );
};
