import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import ComponentCard from './ComponentCard'
//import axios from 'axios';

const projects = [];

const cards = [];

// GET https://api.github.com/users/brendan-holmes
// GET https://api.github.com/users/brendan-holmes/repos

const userUrl = 'https://api.github.com/users/brendan-holmes';
const reposUrl = 'https://api.github.com/users/brendan-holmes/repos';

//const CardList = async (props) => {
//    const resp = await axios.get(reposUrl);
//
//    return (
//        <>
//            {props.profiles.map(profile => 
//            
//            <ComponentCard 
//            title={resp.data.}
//            subtitle="Mongo, ExpressJS, React, NodeJS"
//            text="Create, read, update and delete movie items from this simple data management app."
//            link="https://mysterious-eyrie-84274.herokuapp.com/"
//            github="https://github.com/brendan-holmes/db-app"/>)}
//	    </>
//    )
//};

//const CardsAndLineBreaks = () => (
//    i = 0
//    array.forEach(element => {
//        i++
//        if (i%2) {
//            // insert line break
//        }
//        else if (i%3) {
//            // insert line break
//        }
//    });
//);

const ComponentCardColumns = () => 
    (
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
                <div class="w-100 d-none d-sm-block d-md-none" />
                <ComponentCard 
                    title="Florist's Portfolio"  
                    subtitle="Bootstrap, React"
                    text="A clean and responsive website that showcases the work of a florist."
                    link="#"
                    github="#"/> 
                <div class="w-100 d-none d-md-block d-l-none" /> 
                <ComponentCard 
                    title="Web App 1"  
                    subtitle="languages"
                    text="Description"
                    link="#"
                    github="#"/>
                <div class="w-100 d-none d-sm-block d-md-none" />
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
                <div class="w-100 d-none d-md-block d-l-none" />
            </CardDeck>
        </>
    )


export default ComponentCardColumns