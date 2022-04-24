import React from 'react';

const Card = props => {
    const {image, clicked, open} = props;
    let imageLink = "";
    if (open) {
         imageLink = require("../images/" + image);
    } else {
        imageLink = require("../images/" + "back.png");
    }

    return (
        <div>
            <img src={imageLink} alt="image not found" onClick={clicked}/>
        </div>
    );
};

export default Card;
