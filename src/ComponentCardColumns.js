import React, { useState } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import ComponentCard from './ComponentCard'
import axios from 'axios';

//const userUrl = 'https://api.github.com/users/brendan-holmes';
const reposUrl = 'https://api.github.com/users/brendan-holmes/repos';

const getRepoData = () => {
    return axios.get(reposUrl, {})
        .then((response) => {
            console.log(`Retreived ${response.data.length} repos from Github.`)
            let arr = []
            Object.keys(response.data)
            .map((key, index) => arr.push(response.data[key]));
            return arr
    })
    .catch(error => {console.log(`Failed to get Github repository data. ${error}`)})
}

// map the data array to cards

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
                    item.push(<div className="w-100 d-none d-sm-block d-md-none" />);
                }
                if(((i+1) % 3 === 0) && (i !== 0)){
                    item.push(<div className="w-100 d-none d-md-block d-l-none" />);
                }
                return item
            })}
        </>
)};

const ComponentCardColumns = () => 
{
    const [repoData, setRepoData] = useState([]);
    getRepoData().then(result => {
        setRepoData(result);
    })

    return (
        <>
            <style type="text/css">
                {`
                .card-deck { 
                    /* margin-top: 14vh; */
                    margin-left: auto;
                    margin-right: auto;
                    max-width: 1200px;
                }
                `}
            </style>
            <CardDeck>
                <CardList repoData={repoData}/>
            </CardDeck>
        </>
    )
}

export default ComponentCardColumns

/*
<ComponentCard 
                    title="Movies Database" 
                    subtitle="Mongo, ExpressJS, React, NodeJS"
                    text="Create, read, update and delete movie items from this simple data management app."
                    link="https://mysterious-eyrie-84274.herokuapp.com/"
                    github="https://github.com/brendan-holmes/db-app"/>
                <ComponentCard 
                    title="Shopping List"  
                    subtitle="Mongo, ExpressJS, React, Redux, NodeJS"
                    text="Minimal shopping list for shoppers on the go. Create and delete items."
                    link="#"
                    github="#"/>  
                <div className="w-100 d-none d-sm-block d-md-none" />
                <ComponentCard 
                    title="Florist's Portfolio"  
                    subtitle="Bootstrap, React"
                    text="A clean and responsive website that showcases the work of a florist."
                    link="#"
                    github="#"/> 
                <div className="w-100 d-none d-md-block d-l-none" /> 
                <ComponentCard 
                    title="Web App 1"  
                    subtitle="languages"
                    text="Description"
                    link="#"
                    github="#"/>
                <div className="w-100 d-none d-sm-block d-md-none" />
                <ComponentCard 
                    title="Web App 2"  
                    subtitle="languages"
                    text="Description"
                    link="#"
                    github="#"/>  
                <ComponentCard 
                    title="Web App 2"  
                    subtitle="languages"
                    text="Description"
                    link="#"
                    github="#"/>  
                <div className="w-100 d-none d-md-block d-l-none" />*/