import { useState } from "react";

import leftMeme from 'img/left_meme.png';
import rightMeme from 'img/right_meme.png';
import styles from 'styles/App.module.css';

export default function App() {

    const [left, setLeft] = useState(true);

    const inMouse = () => {
        setLeft(false);
    }

    const outMouse = () => {
        setLeft(true);
    }

    const copyText = async (text) => {

        try {

            await navigator.clipboard.writeText(text);
            console.log(text)

        } catch (error) {
            console.log(error)
        }
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
            <button onClick={() => copyText(`${window.location.href}`)}>공유하기</button>
        </div>
    );
};
