import React from 'react'
import Hero from './Hero';
import LeftSection from './LeftSection';    
import RightSection from './RightSection';
import Universe from './Universe';

function ProductsPage() {
    return ( 
        <>
        <Hero />
        <LeftSection   
        imageURL="media/images/.png"
        productName="Zerodha Trading App"
        productDesription="Trade in stocks, commodities and currencies"
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"/>

  appStore,/>
        <RightSection />
        <Universe />
        </>
     );
}

export default ProductsPage;