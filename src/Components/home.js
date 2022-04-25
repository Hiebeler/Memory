import React from 'react';
import {Game} from "./Game";
import Navbar from "./navbar";

class Home extends React.Component {

    images = [
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "6.png",
        "7.png",
        "8.png",
        "9.png",
        "10.png",
        "11.png",
        "12.png"
    ]

    constructor() {
        super();
        let mainPage = (<h1>The record is 26 tries</h1>)
        this.state = {
            mainPage: mainPage
        }
    }

    start = (numberOfCards, cardSet) => {
        let images = this.images;
        if (numberOfCards / 2 !== this.images.length)
            images = this.getShortenedImagesArray(numberOfCards);
        let mainPage = (<Game images={images} cardSet={cardSet} key={this.createUniqueId()}/>);
        this.setState({mainPage});
    }

    getShortenedImagesArray = numberOfCards => {
        let images = [];
        for (let i = 0; i < numberOfCards / 2; i++) {
            let worked = false;
            do {
                var randomImageNumber = Math.floor(Math.random() * this.images.length);
                if (!images.includes(this.images[randomImageNumber])) {
                    images.push(this.images[randomImageNumber]);
                    worked = true;
                }
            } while (!worked);
        }
        return images;
    }

    createUniqueId() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8);
            return v.toString(16);
        });
    }

    render() {
        return (
            <div>
                <Navbar start={this.start}/>
                {this.state.mainPage}
            </div>
        );
    }
}

export default Home;
