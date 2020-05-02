import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import ComponentCard from './ComponentCard'
import axios from 'axios';

const reposUrl = 'https://api.github.com/users/brendan-holmes/repos';

const getRepoData = async () => {
    console.log('Fetching Github repository data...')
    return await axios.get(reposUrl, {})
        .then((response) => {
            console.log(`Retreived ${response.data.length} repos from Github.`)
            let arr = []
            Object.keys(response.data)
            .map((key, index) => arr.push(response.data[key]));
            return arr
    })
    .catch(error => {console.log(`Failed to get Github repository data. ${error}`)})
}

const CardList = (props) => {

    return (
        <>
            {props.repoData.map((repo,i) => {
            let item = []
            
            item.push(
                <ComponentCard key={i} 
                    title={repo.name} 
                    subtitle={repo.language}
                    text={repo.description}
                    link={repo.homepage}
                    github={repo.html_url}/>
            )
            if(((i+1) % 2 === 0) && (i !== 0)){
                item.push(<div key={i+1000} className="w-100 d-none d-sm-block d-md-none" />);
            }
            if(((i+1) % 3 === 0) && (i !== 0)){
                item.push(<div key={i+2000} className="w-100 d-none d-md-block d-l-none" />);
            }
            return item
            })}
        </>
)};

class ComponentCardArea extends React.Component {
    constructor(){
        super();
        this.state = {
            githubRepoData: getPlaceHolderRepoData()
        }
    }

    componentDidMount(){
        getRepoData().then(repoData => {
            this.setState({
                githubRepoData: repoData
            })
        })
    }

    render() {

        return (
            <>
                <style type="text/css">
                    {`
                    .card-deck {
                        margin-left: auto;
                        margin-right: auto;
                        max-width: 1200px;
                    }
                    `}
                </style>
                <CardDeck>
                    <CardList repoData={this.state.githubRepoData} /> 
                </CardDeck>
            </>
    )}
}

const getPlaceHolderRepoData = () => {
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

export default ComponentCardArea