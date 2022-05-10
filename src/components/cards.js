import "../styles/cards.scss";
import Stories from "./stories";
import Card from "./card";

function Cards() {
    const commentsOne = [
        {
          user: "raffagrassetti",
          text: "Que foto linda",
          id: 1,
        },
        {
          user: "therealadamsavage",
          text: "Incrível",
          id: 2,
        },
        {
          user: "mapvault",
          text: "Boaaaaa!",
          id: 3,
        },
      ];
    
      const commentsTwo = [
        {
          user: "mapvault",
          text: "Eu amei isso",
          id: 4,
        },
      ];
    
      const commentsThree = [
        {
          user: "dadatlacak",
          text: "Maravilhoso",
          id: 5,
        },
      ];
    
    return(
        <div className="cards">
            <Stories/>


            <Card 
            accountName="rafagrassetti" 
            storyBorder={true} 
            image="https://picsum.photos/800/900"
            comments={commentsOne} 
            likedByText="dadatlacak" 
            likedByNumber={89} 
            />

            <Card 
            accountName="rafagrassetti" 
            storyBorder={true} 
            image="https://picsum.photos/800" 
            comments={commentsTwo} 
            likedByText="rafagrassetti" 
            likedByNumber={10} 
            />

            <Card 
            accountName="mapvault" 
            storyBorder={true} 
            image="https://picsum.photos/800/1000" 
            comments={commentsThree} 
            likedByText="mapvault" 
            likedByNumber={100} 
            />
        </div>
        
    )
}

export default Cards;