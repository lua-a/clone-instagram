import "../styles/card.scss";
import Profile from "./profile";
import {ReactComponent as CardButton} from "../images/cardButton.svg";
import {ReactComponent as Emojis} from "../images/emojis.svg";
import CardMenu from "./cardMenu";
import Comment from "./comment";

function Card(props) {
    const{
        storyBorder,
        image,
        comments,
        likedByText,
        likedByNumber,
        hours,
    } = props;

  return (
    <div className="card">
      <header>
          <Profile iconSize="medium" storyBorder= {storyBorder}/>
          <CardButton className="cardButton"/>
      </header>
      <img className="cardImage" src={image} alt="card content" />
      <CardMenu />
      <div className="likedBy">
          <Profile iconSize="small" hideAccountName={true} />
          <span>
              Curtido por <strong>{likedByText}</strong> e{" "}
              <strong>{likedByNumber} outras pessoas</strong>
          </span>
      </div>
      <div className="comments">
          {comments.map((comments) => {
              return (
                  <Comment 
                  key={comments.id}
                  accountName={comments.user}
                  comment={comments.text}/>
              );
          })}
      </div>
      <div className="timePosted">{hours}Há 2 dias</div>
      <div className="addComment">
          <Emojis className="icon"/>
          <div className="commentText">Adicione um comentário...</div>
          <div className="postText">Publicar</div>
      </div>
  </div>
  );
}

export default Card;