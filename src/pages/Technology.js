import { useState } from "react";

const Technology = ( {technology} ) => {

    const [tabIndex, setTabIndex] = useState(0);

    const vehicle = technology[tabIndex];

    return(
        <main className="grid-container grid-container--technology flow">
            <h1 className="numbered-title"><span className="text-grey">03</span>space launch 101</h1>
            <div className="tab-list number-indicators flex">
            {
                technology.map((vehicle, index) => (
                    <button aria-selected={tabIndex === index ? true : false} role="tab" className="" onClick={()=> setTabIndex(index)}>{index +1 }</button>
                ))
            }
            </div>
            <article className="technology-details flow">
                <header className="flow flow--space-small">
                    <p className="text-accent uppercase">the terminology...</p>
                    <h2 className="fs-700 ff-serif uppercase">{ vehicle.name }</h2>
                </header>
                <p>{ vehicle.description }</p>
            </article>
            <picture>
                <source media="(min-width: 45rem)" srcset={vehicle.images.portrait}/>
                <img src={vehicle.images.landscape} alt="cat"/>
            </picture> 
        </main>
    )
}

export default Technology;