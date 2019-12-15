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
//        <button onClick={ props.onDisplayClick } style={ props.buttonStyle }>{ props.selectType }</button>
//        <button onClick={ props.onSolveClick } style={ props.buttonStyle }>Solve</button>
//        <button onClick={ props.onNewClick } style={ props.buttonStyle }>New</button>
//        <button onClick={ props.onSizeClick } style={ props.buttonStyle }>{ props.selectSize } puzzle</button>