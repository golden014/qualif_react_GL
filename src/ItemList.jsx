import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import Navbar from "./components/Navbar";
import { getAllFruit } from "./Query";

const ItemList = () => {

    

    
    const {loading, data, error} = useQuery(getAllFruit)
    
  

    if(error) return <div>{error.message}</div>
    if(loading) return <div>Loading . . .</div>
    // if(!loading) console.log(data)

    // const [fruits, setFruits] = useState([])
    // setFruits(data)

//    console.log(data)
//    console.log(data.fruits[1])

//    data.fruits.forEach(fruit => {
//         // return (
//         //     <div>
//         //         aaa
//         //     </div>
//         // )
//         console.log(fruit.id)
//     })

   
    return ( 
        <div className="itemList-container">
            <Navbar/>
            <div className="fruit-card">
               {
                    data.fruits.map(fruit => {
                        // {console.log("masuk" + fruit.id)}
                        return (
                            <Card children={fruit} key={fruit.id} fruitName={fruit.fruit_name} description={fruit.description} scientific={fruit.scientific_name} />
                        )
                    })
               }
            </div>
        </div>

    );
}
 
export default ItemList;