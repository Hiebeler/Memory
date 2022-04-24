import React from 'react';
import {AppBar, Toolbar, Typography, Box, MenuItem, InputLabel, Select, FormControl, Button} from "@mui/material";
import {AligntRightDiv, SettingsDiv} from './styles/navbar.styled'

const Navbar = props => {
    const diffrentNubmersOfImages = [12, 18, 24];

    const [numberOfCards, setNumberOfCards] = React.useState(18);

    const handleChange = (event) => {
        setNumberOfCards(event.target.value);
    };

    const start = () => {
        props.start(numberOfCards);
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
                                <InputLabel id="demo-simple-select-label">Number of Cards</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    onChange={handleChange}
                                    value={numberOfCards}
                                >
                                    {diffrentNubmersOfImages.map((number) => (
                                        <MenuItem value={number} key={number}>{number}</MenuItem>
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
