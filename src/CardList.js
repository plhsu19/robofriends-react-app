import React from 'react';
import Card from './Card';

// need to deconstruct the argument parameter bf using the variables (name, email, id)
const CardList = ({ robots }) => {
    const cardArray = robots.map((user, i) => {
        return (
        <Card
        key = {i} 
        name={robots[i].name} 
        email={robots[i].email} 
        id={robots[i].id} />
        ) 
    });
    // console.log(cardArray);
    // console.log(cardArray[0]);
    return (
        // the component can return only one JSX element, so wrapped them in a <div></div>
        <div>
            {cardArray
}
        </div>
    )
}

export default CardList;