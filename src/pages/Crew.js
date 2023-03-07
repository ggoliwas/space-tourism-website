import { useState } from "react";

const Crew = ( {crew} ) => {

    const [tabIndex, setTabIndex] = useState(0);

    const member = crew[tabIndex];

    return(
        <main className="grid-container grid-container--crew flow">
            <h1 className="numbered-title"><span className="text-grey">02</span>meet your crew</h1>
            <div className="tab-list dot-indicators flex">
                {
                    crew.map((member, index) => (
                        <button aria-selected={tabIndex === index ? true : false} className="ff-sans-cond text-accent" onClick={()=> setTabIndex(index)}></button>
                    ))
                }
            </div>
            <article className="crew-details flow">
               <header className="flow flow--space-small">
                    <p className="fs-600 ff-serif text-grey uppercase">{ member.role}</p>
                    <h2 className="fs-700 uppercase">{ member.name }</h2>
               </header> 
               <p>{ member.bio }</p>
            </article>
            <picture>
                <source srcset={`${process.env.PUBLIC_URL+member.images.png.substring(1)}`} type="image/webp" />
                <img src={`${process.env.PUBLIC_URL+member.images.png.substring(1)}`} alt={"The "+member.name} />
            </picture> 
        </main>
    )
}

export default Crew;