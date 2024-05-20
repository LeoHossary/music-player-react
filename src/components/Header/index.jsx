import "./styles.css";
import Logo from "./../../assets/logo.svg";
import ProfileImage from "./../../assets/profile.jpg";

export default function Header() {
  return (
    <div className="container-header">
      <div className="logo">
        <img src={Logo} alt="Logotipo do nosso player escrito cubos player" />
      </div>
      <div className="welcome">
        <img src={ProfileImage} alt="Foto de perfil do usuário" />
        <strong>Bem vindo, Leonardo.</strong>
      </div>
    </div>
  );
}
