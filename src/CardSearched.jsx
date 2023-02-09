import Card from "./Card"

function CardSearched() {
    const hasilSearch = localStorage.getItem("searched")
    const filtered = JSON.parse(hasilSearch)



    if (filtered != null) {
        localStorage.setItem("searched", null)
        return (
            filtered.map(fruit => {
                return (
                    <Card children={fruit} key={fruit.id} fruitName={fruit.fruit_name} description={fruit.description} scientific={fruit.scientific_name}></Card>
                )
            })
        )
    } else {
        return (
            <div>
                {/* <h1>No fruits found !</h1> */}
            </div>
        )
    }
}

export default CardSearched