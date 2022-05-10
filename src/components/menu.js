import "../styles/menu.scss";
import {ReactComponent as Home} from "../images/home.svg";
import {ReactComponent as Direct} from "../images/direct.svg";
import {ReactComponent as Encontrar} from "../images/encontrar.svg";
import {ReactComponent as Publicacao} from "../images/publicacao.svg";
import {ReactComponent as Atividade} from "../images/atividades.svg";
import image from "../images/perfil.jpeg";
import ProfileIcon from "./profileIcon";

function Menu() {
    return (
    <div className="menu">
        <Home className="icon"></Home>
        <Direct className="icon"></Direct>
        <Publicacao className="icon"></Publicacao>
        <Encontrar className="icon"></Encontrar>
        <Atividade className="icon"></Atividade>
        <ProfileIcon iconSize="small" image={image} />
    </div>
    );
}

export default Menu;