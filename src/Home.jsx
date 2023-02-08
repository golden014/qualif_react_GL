import Navbar from "./components/Navbar";

const Home = () => {
    return ( 
        <div className="homeContainer">
            <Navbar/>
            <div className="home-content">
                <div className="home-title">
                    <h1>Welcome to GL-Fruits</h1>
                </div>
                <div className="home-content-content">
                    <h1>Search for fruits !</h1>
                    <div className="search-bar-home">
                        <input type="text" placeholder="Search..." className="search-bar"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Home;