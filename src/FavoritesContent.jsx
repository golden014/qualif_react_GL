import CardUnselect from "./CardUnselect"

function content (){

    const temp = localStorage.getItem("favorites")
    const favs = JSON.parse(temp)

    if(favs != null) {
        return(
            <div className="fruit-card">
                {
                    favs.map(fruit => {
                        return (
                            <CardUnselect children={fruit} key={fruit.id} fruitName={fruit.fruit_name} description={fruit.description} scientific={fruit.scientific_name}></CardUnselect>
                        )
                    })
                }
            </div>
        )
    } else {
        return (
            <div>
                <h1>Add something to your favorites first !</h1>
            </div>
        )
    }
    
}

export default content