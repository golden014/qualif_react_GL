import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css"

const Navbar = () => {

    let history = useNavigate()

    

    const [isActive, setActive] = useState(false)
    console.log(isActive)
    function hamburgerClicked() {
        console.log(isActive);
        setActive(!isActive)
    }



    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <h1 onClick={(e) => history("/")}>GL-Fruits</h1>
            </div>

            <div className="hamburger" onClick={hamburgerClicked}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            <div className={`navbar-right${isActive ? " active" : ""}`}>
                <ul>
                    <li>
                        <p onClick={(e)=>history("/itemList")}>Item List</p>
                    </li>
                    <li>
                        <p onClick={(e)=>history("/favorites")}>Favorites</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;