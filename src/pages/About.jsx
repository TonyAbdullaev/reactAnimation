import React from 'react';
import Main from "./Main";

const About = () => {
    const routes = [
        {path: '/', Component: Main}
    ]

    return (
        <div>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, consectetur, culpa cupiditate dignissimos fugiat illum laborum minus praesentium quas temporibus ullam veritatis? A dicta dolorum harum iste qui. Asperiores dignissimos, et incidunt iure nihil non quos sequi tempore temporibus vero? Eos et hic iste modi sed? Dolore eligendi mollitia nemo!</p>
        </div>
    );
};

export default About;