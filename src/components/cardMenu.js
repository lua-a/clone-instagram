import "../styles/cardMenu.scss";
import {ReactComponent as Direct} from "../images/direct.svg";
import {ReactComponent as Comments} from "../images/comments.svg";
import {ReactComponent as Atividades} from "../images/atividades.svg";
import {ReactComponent as Bookmark} from "../images/bookmark.svg";


function CardMenu() {
    return (
    <div className="cardMenu">
        <div className="interactions">
            <Atividades className="icon"/>
            <Comments className="icon"/>
            <Direct className="icon"/>
        </div>
        <Bookmark className="icon"/>
    </div>
    );
}

export default CardMenu;