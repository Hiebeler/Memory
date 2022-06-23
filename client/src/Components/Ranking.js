import React from 'react';

class Rankings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ranking: []
        }
    }

    async componentDidMount() {
        const fetchUserEmail = async () => {
            return fetch("http://10.115.3.24:8080/api/getScoreboard").then(async (data) => {
                return await data.json()
            });
        };
        this.setState({
            ranking: await fetchUserEmail()
        })
    }

    render() {
        return (
            <div>
                {this.state.ranking.map((rank) => {
                    console.log(rank);
                    return <div>{rank.name + "  " + rank.score}</div>
                })}
            </div>
        );
    }
}



export default Rankings;