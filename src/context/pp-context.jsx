import React from "react";

const PPContext = React.createContext({
    imgSource: null,
    setImageSrc: () => {}
});

export default PPContext;