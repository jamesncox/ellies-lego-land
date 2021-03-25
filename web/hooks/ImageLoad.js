import React, { useState, useEffect } from "react";

const ImageLoad = React.memo(({ src, placeholder, alt = "", className }) => {
  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState(placeholder);

  useEffect(() => {
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () => {
      setLoading(false);
      updateSrc(src);
    };
  }, [src]);

  return (
    <img
      className={className}
      src={currentSrc}
      style={{
        opacity: loading ? 0.5 : 1,
        // transition: "opacity ease-in 200ms",
      }}
      alt={alt}
    />
  );
});

export default ImageLoad;
