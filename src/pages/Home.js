import { Link } from "react-router-dom";

const Home = () => {
    return(
        <main className="grid-container grid-container--home flow">
            <div>
                <h1 className="ff-sans-cond fs-500 text-accent uppercase letter-spacing-3">so, you want travel to <span className="ff-serif text-white fs-900 d-block">space</span></h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <Link to="destination" className="button button-large uppercase ff-serif text-dark">explore</Link>
        </main>
    )
}

export default Home;