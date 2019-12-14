import React from 'react';

const UiView = (props) => (

    <div className="nav" style={ props.navStyle }>
        <button style={ props.buttonStyle }>Can</button>
        <button style={ props.buttonStyle }>You</button>
        <button style={ props.buttonStyle }>Solve</button>
        <button style={ props.buttonStyle }>This?</button>

    </div>

);

export default UiView;