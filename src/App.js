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

    const copyText = async (data) => {
        try {
            // await navigator.clipboard.writeText(data);
            await navigator.clipboard;

        } catch (error) {
            console.log(error)
        }
    }

    const onShare = () => {
        const shareObj = {
          title: "고양이 귀여워",
          text: "귀여운 고양이에 마우스를 올리거나 터치해보세요.",
          url: window.location.href
        };

        if( navigator.share ) {
            navigator
                .share(shareObj)
                .then(() => {
                    alert("공유 성공");
                })
                .catch((error) => {
                    alert("공유 실패");
                });
        }else {
            alert("페이지 공유 지원 불가");
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
            {/*<button onClick={() => copyText(`${window.location.href}`)}>공유하기</button>*/}
            <button onClick={onShare}>공유하기</button>
        </div>
    );
};
