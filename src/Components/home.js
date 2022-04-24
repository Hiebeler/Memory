import React from 'react';
import {Game} from "./Game";
import Navbar from "./navbar";


class Home extends React.Component {

    images = [
        "boat1.png",
        "boat2.png",
        "boat3.png",
        "boat4.png",
        "boat5.png",
        "boat6.png",
        "bus.png",
        "car.png",
        "car2.png",
        "helicopter.png",
        "plane.png",
        "taxi.png"
    ]

    constructor() {
        super();
        let mainPage = (<h1>The record is 26 tries</h1>)
        this.state = {
            mainPage: mainPage
        }
    }

    start = (numberOfCards) => {
        let images = this.images;
        if (numberOfCards / 2 !== this.images.length)
            images = this.getShortenedImagesArray(numberOfCards);
        let mainPage = (<Game images={images} key={this.createUniqueId()}/>);
        this.setState({mainPage});
        this.isGameRunning = true;
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
