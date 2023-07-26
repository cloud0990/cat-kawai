import { useState } from "react";

import leftMeme from 'img/left_meme.png';
import rightMeme from 'img/right_meme.png';
import styles from 'styles/App.module.css';

import Firecracker from "components/confetti/Firecracker";
import Stars from "./components/confetti/Stars";

export default function App() {

    const [left, setLeft] = useState(true);
    const [stroking, setStroking] = useState(0); // 쓰다듬기 횟수

    const inMouse = () => {
        setLeft(false);
        setStroking(stroking + 1);
    }

    const outMouse = () => {
        setLeft(true);
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
                    // alert("공유 실패");
                });
        }else {
            alert("페이지 공유 지원 불가");
        }
    }

    return (
        <div>
            { ( stroking === 0 ) ? <Stars /> : null }
            { ( stroking % 10 === 0 && stroking !== 0 ) ? <Firecracker /> : null }
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
            <div className={styles.footer}>
                <h2 style={{
                    fontWeight: `${ ( stroking % 10 === 0 && stroking !== 0) ? 700 : 500 }`
                }}>
                    {stroking}
                </h2>
                <button onClick={ onShare } type="button" className="btn btn-primary">
                    <i className="fas fa-up-right-from-square"></i>
                </button>
            </div>
        </div>
    );
};
