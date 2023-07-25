import styles from 'styles/App.module.css';
import leftMeme from 'img/left_meme.png';
import rightMeme from 'img/right_meme.png';
import { useState } from "react";


export default function App() {

    const [left, setLeft] = useState(true);

    const inMouse = () => {
        setLeft(false);
    }

    const outMouse = () => {
        setLeft(true);
    }

    return (
        <div>
            <img
                alt={"고양이"}

                src={
                    `${left ? leftMeme : rightMeme}`
                }

                onMouseEnter={inMouse}
                onMouseOut={outMouse}

                onTouchStart={inMouse}
                onTouchEnd={outMouse}
            />
        </div>
    );
};
