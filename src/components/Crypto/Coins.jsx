import React from "react";

const Coins = (props) =>{
    
    

    return(
        <div>{props.coins.map(c =><div key={c.id}>
            {c.name}
        </div>)};</div>
    )
}

export default Coins;