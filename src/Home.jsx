import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Card from "./Card";
import CardSearched from "./CardSearched";
import Navbar from "./components/Navbar";
import { getAllFruit } from "./Query";

const Home = () => {

    // useEffect (() => {
    //     async function getData(){
    //         fetch('https://fruityvice.com/api/fruit/all.json', {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/JSON",
    //               },
    //               mode: "no-cors"
    //         }).then(res => {
    //             return res.json()
    //         }).then(data => {
    //             console.log(data)
    //         })
    
    //     }
    //     getData()
    // }, [])
    const [toSearch, setToSearch] = useState("")
    const {loading, data, error} = useQuery(getAllFruit)
    

    if(error) return <div>{error.message}</div>
    if(loading) return <div>Loading . . .</div>

   let temp = []

    const handleSearch = (e) => {
        if (e.key == "Enter") {
            //lakukan search
            temp = data.fruits.filter(f => f.fruit_name.includes(toSearch))
            console.log(temp)
            localStorage.setItem("searched", JSON.stringify(temp))
            window.location = window.location
        }
    }

    const hasilSearch = localStorage.getItem("searched")
    const filtered = JSON.parse(hasilSearch)

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
                        <input 
                        type="text" 
                        placeholder="Search..." 
                        className="search-bar"
                        onChange={(e) => setToSearch(e.target.value)}
                        onKeyDown={handleSearch}
                        />
                    </div>

                    <CardSearched/>
            
                </div>
            </div>
        </div>
    );
}
 
export default Home;