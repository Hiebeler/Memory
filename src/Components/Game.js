import React from 'react';
import Grid from "@mui/material/Grid";
import Card from "./Card";
import {Box, Button} from "@mui/material";
import {NamePrompt} from "./namePrompt";

export class Game extends React.Component {

    images = [];
    cardSet = 1;
    time = null;
    imagePosition = [];
    difficulty = 2000;

    constructor(props) {
        super(props);
        this.images = props.images;
        this.cardSet = props.cardSet;
        this.difficulty = props.difficulty;
        let {grid} = this.createGrid();
        this.state = {
            grid,
            clicked: [],
            found: [],
            countScore: 0,
            openNamePrompt: false
        }
    }

    handleClick(position) {
        if (this.state.countScore === 0) {
            this.time = Date.now();
        }
        if (!(this.state.clicked.length >= 2) && !this.state.found.includes(position) && !this.state.clicked.includes(position)) {
            let countScore = this.state.countScore;
            countScore++;
            let grid = this.toggleClickedCard(position, true);
            let clicked = this.addClickedCardToArray(position);
            if (clicked.length >= 2) {
                setTimeout(() => {
                    let found = this.checkIfFoundPair(clicked);
                    clicked = [];
                    this.setState({grid, clicked, countScore, found});
                }, this.difficulty);
            }
            this.setState({grid, clicked, countScore});
        }
    }

    checkIfFoundPair(clicked) {
        let found = this.state.found;
        if (this.imagePosition[clicked[0]] === (this.imagePosition[clicked[1]] - this.images.length) || this.imagePosition[clicked[1]] === (this.imagePosition[clicked[0]] - this.images.length)) {
            found.push(clicked[0]);
            found.push(clicked[1]);
        } else {
            for (let i = 0; i < 2; i++) {
                this.toggleClickedCard(clicked[i], false);
            }
        }
        return found;
    }

    addClickedCardToArray(position) {
        let clicked = this.state.clicked;
        clicked.push(position);
        return clicked;
    }

    closeCards(clicked) {
        for (let i = 0; i < 2; i++) {
            this.toggleClickedCard(clicked[i], false);
        }
    }

    toggleClickedCard(position, visibility) {
        let grid = this.state.grid;
        let image = this.images[this.imagePosition[position]];
        if (this.imagePosition[position] >= this.images.length) {
            image = this.images[this.imagePosition[position] - this.images.length];
        }
        grid[position] = (<Grid item lg={2} md={4} sm={4} xs={6} key={position}><Card image={image}
                                                                                      clicked={() => this.handleClick(position)}
                                                                                      open={visibility}
                                                                                      cardSet={this.cardSet}/></Grid>);
        return grid;
    }

    createGrid() {
        let grid = [];
        for (let i = 0; i < (this.images.length * 2); i++) {
            this.imagePosition[i] = i;
        }
        this.imagePosition = this.shuffle(this.imagePosition);
        for (let i = 0; i < this.imagePosition.length; i++) {
            let image = this.images[i];
            if (i >= this.images.length) {
                image = this.images[i - this.images.length];
            }
            grid[i] = (<Grid item lg={2} md={4} sm={4} xs={6} key={i}><Card image={image}
                                                                            clicked={() => this.handleClick(i)}
                                                                            open={false}/></Grid>)
        }
        return {grid};
    }

    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    checkIfWon() {
        if (this.state.found.length >= (this.images.length * 2)) {
            return true;
        }
        return false;
    }

    saveScore() {
        this.handleClickOpenModal();
    }

    handleClickOpenModal() {
        this.setState({openNamePrompt: !this.state.openNamePrompt})
    }

    render() {
        console.log(this.cardSet);
        let won = this.checkIfWon();
        let timediffrence = Date.now() - this.time;
        return (
            <div>
                <Box sx={{m: 2}}>
                    {this.state.openNamePrompt ? <NamePrompt saveToFirebase={this.saveToFirebase}/> : null}
                    <h1>{won ? ("WON In " + timediffrence.toLocaleString() + "s") : null}</h1>
                    <h4>score: {this.state.countScore}</h4>
                    {!won ? (<Button variant="contained" color="secondary"
                                     onClick={() => this.saveScore()}>save</Button>) : null}
                </Box>
                <Grid container spacing={5}>
                    {this.state.grid}
                </Grid>
            </div>
        );
    }
}