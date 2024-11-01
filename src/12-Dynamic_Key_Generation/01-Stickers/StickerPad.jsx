import React from "react";

import "./App.css";
import styles from "./StickerPad.module.css";
import { getSticker } from "./Stickers.data";

function generateUniqueString(length) {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
}

function StickerPad() {
  const [stickers, setStickers] = React.useState([]);

  console.log(stickers);

  return (
    <button
      className={styles.wrapper}
      onClick={(event) => {
        const stickerData = getSticker();
        const newSticker = {
          ...stickerData,
          x: event.clientX,
          y: event.clientY,
          id: generateUniqueString(5),
        };

        const nextStickers = [...stickers, newSticker];
        setStickers(nextStickers);
      }}
    >
      {stickers.map((sticker) => (
        <img
          className={styles.sticker}
          src={sticker.src}
          alt={sticker.alt}
          key={sticker.id}
          style={{
            left: sticker.x,
            top: sticker.y,
            width: sticker.width,
            height: sticker.height,
          }}
        />
      ))}
    </button>
  );
}

export default StickerPad;
