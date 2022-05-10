import "../styles/suggestions.scss";
import Profile from "./profile";

function Suggestions() {
    return (
        <div className="suggestions">
          <div className="titleContainer">
            <div className="title">Sugestões para você</div>
            <a href="/">Ver tudo</a>
            </div>

            <Profile 
            caption="Seguido(a) por mapvaul e mais 2 pessoas" 
            urlText="Seguir" 
            iconSize="medium" 
            captionSize="small" 
            />
            <Profile 
            caption="Seguido(a) por mapvaul e mais 1 pessoa" 
            urlText="Seguir"
            iconSize="medium" 
            captionSize="small" 
            />
            <Profile 
            caption="Novo no instagram" 
            urlText="Seguir"
            iconSize="medium" 
            captionSize="small" 
            />
            <Profile 
            caption="Novo no instagram" 
            urlText="Seguir"
            iconSize="medium" 
            captionSize="small" 
            />
            <Profile 
            caption="Seguido(a) por mapvaul e mais 7 pessoas"  
            urlText="Seguir"
            iconSize="medium" 
            captionSize="small" 
            />
    </div>
    );
}

export default Suggestions;