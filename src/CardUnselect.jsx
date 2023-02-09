export default function CardUnselect({children, fruitName, description, scientific}){
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
         let favs = JSON.parse(temp)
        //  const tes = [
        //     children
        //  ]

        //hapus dari favs
        favs = favs.filter(x => x.id !== children.id)

        
        //  tempp.fo(child => {
        //     tes.push(child)
        //  });

        // console.log(tempp)
        // if (tempp != null) {
        //     tempp.forEach(fav => {
        //         tes.push(fav)
        //     });
        // }


        //overwrite localstorage favorites
        // console.log("after loop: ")
        // console.log(tes)
        localStorage.setItem("favorites", JSON.stringify(favs))
        console.log(favs)
        window.location = window.location
        
    }
    // console.log(children)
    // localStorage.clear()
    return (
        <div className="card">
            <h2>{fruitName} --- {scientific}</h2>
            <h1>{description}</h1>
            <button onClick={selected}>Remove from favorites</button>
        </div>
    )
}   