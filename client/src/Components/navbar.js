import React from 'react';
import {AppBar, Toolbar, Typography, Box, MenuItem, InputLabel, Select, FormControl, Button} from "@mui/material";
import {AligntRightDiv, SettingsDiv} from './styles/navbar.styled'

const Navbar = props => {
    const differentNubmersOfImages = [12, 18, 24];
    const differentCardSets = ["default", "animals", "snowman"];
    const difficultyArray = ["easy", "normal", "hard", "impossible"];
    const difficultyValues = [2000,1000,400,150];

    const [numberOfCards, setNumberOfCards] = React.useState(18);
    const [cardSet, setCardSet] = React.useState(2);
    const [difficulty, setDifficulty] = React.useState(2000);

    const handleNumberOfCardsChange = (event) => {
        setNumberOfCards(event.target.value);
    };

    const handleCardSetChange = (event) => {
        setCardSet(event.target.value);
    };

    const handleDifficutlyChange = (event) => {
        setDifficulty(event.target.value);
    };

    const start = () => {
        props.start(numberOfCards, cardSet, difficulty);
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" style={{background: '#c600f1'}}>
                <Toolbar>
                    <Typography variant="h6" component="div">
                        Memory
                    </Typography>
                    <SettingsDiv>
                        <Box sx={{minWidth: 180}} className="numberOfCards">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Card sets</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Card Sets"
                                    onChange={handleCardSetChange}
                                    value={cardSet}
                                >
                                    {differentCardSets.map((number, index) => (
                                        <MenuItem value={index + 1} key={number}>{number}</MenuItem>
                                    ))}

                                </Select>
                            </FormControl>
                        </Box>
                    </SettingsDiv>
                    <SettingsDiv>
                        <Box sx={{minWidth: 180}} className="numberOfCards">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Number of cards</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Number of cards"
                                    onChange={handleNumberOfCardsChange}
                                    value={numberOfCards}
                                >
                                    {differentNubmersOfImages.map((number, index) => (
                                        <MenuItem value={number} key={number}>{number}</MenuItem>
                                    ))}

                                </Select>
                            </FormControl>
                        </Box>
                    </SettingsDiv>
                    <SettingsDiv>
                        <Box sx={{minWidth: 180}} className="difficulty">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Difficulty"
                                    onChange={handleDifficutlyChange}
                                    value={difficulty}
                                >
                                    {difficultyArray.map((difficulty,index) => (
                                        <MenuItem value={difficultyValues[index]} key={index}>{difficulty}</MenuItem>
                                    ))}

                                </Select>
                            </FormControl>
                        </Box>
                    </SettingsDiv>
                    <AligntRightDiv>
                        <Button color="inherit" variant="outlined" onClick={start}>Start</Button>
                    </AligntRightDiv>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
