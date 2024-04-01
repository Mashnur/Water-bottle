import './Bottle.css'

const Bottle = ({bottle ,handleCart}) => {
    const {name,img,price}= bottle;
    return (
        <div className="Bottle">
            <h4>Bottle {name}</h4>
            <img src={img} alt="" />
            <p>${price}</p>
            <button onClick={handleCart}>purchase</button>
            
        </div>
    );
};

export default Bottle;