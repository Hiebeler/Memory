import React from 'react';
import { Box } from '@mui/material';

const Card = props => {
    const {image, clicked, open, cardSet} = props;
    let imageLink = "";
    if (open) {
        imageLink = require("../images/set" + cardSet + "/" + image);
    } else {
        imageLink = require("../images/back.png");
    }

    return (
        <div>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <img src={imageLink} alt="not found" onClick={clicked} height="200px"/>
            </Box>
        </div>
    );
};

export default Card;
