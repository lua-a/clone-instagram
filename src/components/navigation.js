import "../styles/navigation.scss";
import {ReactComponent as Logo} from "../images/logoInsta.svg";
import {ReactComponent as Lupa} from "../images/pesquisa.svg";
import Menu from "./menu";

function Navigation() {
    return (
        <div className="navigation">
            <div className="container">
                <Logo className="logo"></Logo>
                <div className="search">
                    <Lupa className="searchIcon"></Lupa>
                    <span className="searchText">Pesquisar</span>
                </div>
                <Menu/>
            </div>
        </div>
    );
}

export default Navigation;