import React from 'react';

const Scroll = (props) => {
    return (
        // In the JSX syntax: put the react component object accordingly
        // props.children == <CardList .>
        <div style={{
            overflow: 'scroll',
            border: '5px solid black',
            height: '800px'
        }}>
            {props.children}
        </div>
    )
}

export default Scroll;