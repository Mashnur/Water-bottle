import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'


const Bottles = () => {
    const[Bottles,SetBottles]=useState([])
    const[Cart, SetCart]=useState([])
    useEffect(()=>{
        fetch('bottle.json')
        .then(res=>res.json())
        .then(data=>SetBottles(data))
    },[])

    const handleCart=bottle=>{
        console.log(bottle)
        console.log('Adiing bottle')
        const NewCart=[...Cart,Bottle]
        SetCart(NewCart)
    }
    return (
        <div>
            <h5>Bottles;{Bottles.length}</h5>
            <h4>Cart:{Cart.length}</h4>
            <div className="Bottle-container">
            {
                Bottles.map(bottle=><Bottle bottle={bottle} key={bottle.id} handleCart={handleCart}></Bottle>)
            }

            </div>
            
            
        </div>
    );
};

export default Bottles;