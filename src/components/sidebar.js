import "../styles/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./profile";
import Suggestions from "./suggestions";
import Footer from "./footer";
import image from "../images/perfil.jpeg";

function Sidebar() {
    return (
    <Sticky topOffset={-80}>
        <div className="sidebar">
            <Profile
                username="andrad.lua" 
                caption="Luana Andrade" 
                urlText="Mudar" 
                iconSize="big" 
                image={image}>
            </Profile>
            <Suggestions />
            <Footer />
        </div>
    </Sticky>
    );
}

export default Sidebar;