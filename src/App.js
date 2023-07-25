import styles from './styles/App.module.css';
import leftMeme from './img/left_meme.png';
import rightMeme from './img/right_meme.png';
import { useState } from "react";


export default function App() {

    const [left, setLeft] = useState(true);

    const inMouse = (e) => {
        setLeft(false);
    }

    const outMouse = (e) => {
        setLeft(true);
    }

    return (
        <div>
            <img src={
                `${left ? leftMeme : rightMeme}`
            } alt={"MEME"}
                 onMouseEnter={inMouse}
                 onMouseOut={outMouse}

                 onTouchStart={inMouse}
                 onTouchEnd={outMouse}
            />
        </div>
    );
};
