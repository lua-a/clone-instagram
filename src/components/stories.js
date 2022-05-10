import "../styles/stories.scss";
import HorizontalScroll from "react-scroll-horizontal";
import Story from "./story";

function Stories() {
    return <div className="stories">
        <HorizontalScroll className="scroll" reverseScrool={true}>
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
        </HorizontalScroll>
    </div>
}

export default Stories;
