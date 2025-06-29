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
            <Pricing />
            <Education />
            
        </>
    );
}

export default HomePage;