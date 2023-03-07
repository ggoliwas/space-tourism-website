import { useState } from "react";

const Destination = ({destinations}) => {

    const [tabIndex, setTabIndex] = useState(0);

    const planet = destinations[tabIndex];

    return(
       <main className="grid-container grid-container--destination flow">
            <h1 className="numbered-title"><span className="text-grey">01</span>pick your destination</h1>
            <picture>
                <source srcset={planet.images.webp} type="image/webp" />
                <img src={planet.images.png} alt={"The "+planet.name} />
            </picture> 
            <div className="tab-list underline-indicators flex">
            {
                destinations.map((planets, index) => (
                    <button aria-selected={tabIndex === index ? true : false } role="tab" className="ff-sans-cond text-accent uppercase letter-spacing-2" onClick={() => {setTabIndex(index)}}>{planets.name }</button>
                ))
            }
            </div>
            <article className="destination-info">
                <h2 className="fs-800 ff-serif uppercase">{planet.name}</h2>
                <p>{planet.description}</p>
                <div className="destination-meta flex">
                    <div>
                        <h3 className="text-accent fs-200 uppercase">avg. distance</h3>
                        <p className="ff-serif uppercase">{planet.distance}</p>
                    </div>
                    <div>
                        <h3 className="text-accent fs-200 uppercase">est. travel time</h3>
                        <p className="ff-serif uppercase">{planet.travel}</p>
                    </div>
                </div>
            </article>     
       </main>
    )
}

export default Destination;