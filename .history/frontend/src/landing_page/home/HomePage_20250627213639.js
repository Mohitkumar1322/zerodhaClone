import React from 'react';
import Hero from './Hero';
import Education from './Education';    
import Awards from './Awards';

function HomePage() {
    return (
        <>
            <Hero />
            <Awards />
            <Stats />
            {/* Assuming Stats is another component you want to include */}
            {/* <Pricing /> Uncomment if you have a Pricing component */}
            <Education />
            
        </>
    );
}

export default HomePage;