import React from 'react';
import axios from 'axios';
import Card from '../../components/Card';
import Grid from '../../components/Grid';

const reposUrl = 'https://api.github.com/users/brendan-holmes/repos';

const getRepoData = async () => {
    console.log('Fetching Github repository data...')
    return await axios.get(reposUrl, {})
        .then((response) => {
            console.log(`Fetched ${response.data.length} repositories from Github`)
            let arr = []
            Object.keys(response.data)
            .map((key, index) => arr.push(response.data[key]));
            return arr;
    })
    .catch(error => {console.log(`Failed to get Github repository data. ${error}`)});
}

const getPlaceholderRepoData = () => {
    let arr = [];

    for (let i = 0; i < 6; i++) {
        arr.push({
            "name":"",
            "language":"",
            "description":"",
            "homepage":"",
            "github":""}
            ); 
    }

    return arr;
}

class Projects extends React.Component {
    constructor(){
        super();
        this.state = {
            githubRepoData: getPlaceholderRepoData()
        }
    }

    componentDidMount() {
        getRepoData().then(repoData => { this.setState({ githubRepoData: repoData }) });
    }

    render() {

        const cards = this.state.githubRepoData.map((repo,i) => {
            return (
                <Card key={i} 
                    title={repo.name} 
                    subtitle={repo.language}
                    text={repo.description}
                    link={repo.homepage}
                    buttonHref={repo.html_url}
                    buttonText='View on GitHub'/>
            );
        });

        return (
            
            <Grid items={cards} />
    )};
}

export default Projects