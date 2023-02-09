export default function Card({children, fruitName, description, scientific}){
    // console.log("tes")
    // console.log(fruitName)
    // console.log(description)
    // console.log(localStorage.getItem("favorites"))

    function selected() {
        //saat diselect masukin fruit ke favorites
        // const temp = localStorage.getItem("favorites")
        // te
        // localStorage.setItem("favorites", JSON.stringify(children));
        // console.log(JSON.parse(localStorage.getItem("favorites")))
         const temp = localStorage.getItem("favorites")
         const tempp = JSON.parse(temp)
         const tes = [
            children
         ]

        
        //  tempp.fo(child => {
        //     tes.push(child)
        //  });

        // console.log(tempp)
        if (tempp != null) {
            tempp.forEach(fav => {
                tes.push(fav)
            });
        }


        //overwrite localstorage favorites
        // console.log("after loop: ")
        // console.log(tes)
        localStorage.setItem("favorites", JSON.stringify(tes))
        console.log(tes)
        
    }
    // console.log(children)
    // localStorage.clear()
    return (
        <div className="card">
            <h2>{fruitName} --- {scientific}</h2>
            <h1>{description}</h1>
            <button onClick={selected}>Add to favorites</button>
        </div>
    )
}   