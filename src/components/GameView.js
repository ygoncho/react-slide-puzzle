import React, { Component } from 'react'
import UI from '../containers/UI'
import Sidebar from './Sidebar'
import Puzzle from '../containers/Puzzle'

const GameView = ({ viewArea, puzzleArea, isSolving  }) => {

    const orientation = (Math.min(viewArea.w, viewArea.h) === viewArea.h) ? "landscape" : "portrait";
    console.log(" puzzle area? " + puzzleArea.w);

    let puzzleScale = 1;

    let availableGameWidth = viewArea.w;
    let availableGameHeight = (orientation === "landscape" && puzzleArea.h < viewArea.h)  ? puzzleArea.h : viewArea.h;
    if(availableGameWidth > 1024) {

        availableGameWidth = 700;
        availableGameHeight = 600;
    }

    let availablePuzzleWidth = availableGameWidth;
    let availablePuzzleHeight = availableGameHeight;
    if(orientation === "landscape") {

        const scaleForHeight = availableGameHeight/puzzleArea.h;
        puzzleScale = scaleForHeight;
        if(( puzzleArea.w ) * scaleForHeight > availableGameWidth - 310) {

            puzzleScale = puzzleScale * ( availableGameWidth - 310 )/( puzzleArea.w * scaleForHeight );
        }

        availablePuzzleWidth = ( puzzleArea.w * puzzleScale );
        availableGameWidth = Math.min( availablePuzzleWidth + 330, viewArea.w );

    } else {

        availableGameHeight = viewArea.h;
        const scaleForWidth = availablePuzzleWidth/( puzzleArea.w + 30 );
        puzzleScale = scaleForWidth;
        if(puzzleArea.h * scaleForWidth > availableGameHeight - 260) {

            puzzleScale = puzzleScale * ( availableGameHeight - 260 )/( puzzleArea.h * scaleForWidth );
        }

        availablePuzzleHeight = ( puzzleArea.h * puzzleScale );
        availableGameHeight = Math.min( availablePuzzleHeight + 330, viewArea.h );
    }

    const leftpos = (orientation === "landscape") ? ( availablePuzzleWidth - ( puzzleArea.w * puzzleScale ) )/2: ( availablePuzzleWidth - (puzzleArea.w * puzzleScale) )/2 - 15;//2 for border width
    const leftpercent = (leftpos/availableGameWidth) * 100;

    console.log(" left percent? " + leftpercent + ", left pos: " + leftpos + ", available puzzle width: " + availablePuzzleWidth + ", available game width: " + availableGameWidth);
    const toppos = (orientation === "landscape") ? ( availablePuzzleHeight - ( puzzleArea.h * puzzleScale ) )/2 - 15: ( availablePuzzleHeight - (puzzleArea.h * puzzleScale) )/2;
    const toppercent = (toppos/availableGameHeight) * 100;
    const uiwidth = (orientation === "landscape") ? 100:  availablePuzzleWidth;
    const uiheight = (orientation === "landscape") ?  availablePuzzleHeight: 100;
    const btnwidth = (orientation === "landscape") ? uiwidth : uiwidth * 0.25;
    const btnheight = (orientation === "landscape") ? uiheight * 0.25 : uiheight;

    const gridStyle = {
        transform:`scale(${ puzzleScale })`,
        left:`${ leftpercent }%`,
        top:`${ toppercent }%`
    };

    const gamecontainerstyle = {
        width:`${ availableGameWidth }px`,
        height:`${ availableGameHeight }px`
    };

    const containerstyle = {
        width:`${ availablePuzzleWidth }px`,
        height:`${ availablePuzzleHeight }px`
    };

    const uistyle = {
        width:`${ uiwidth }px`,
        height:`${ uiheight }px`,
    };

    const buttonstyle = {
        width:`${ btnwidth }px`,
        height:`${ btnheight }px`,
        textAlign:`center`
    };


    if(viewArea.w > 1024) {

        return (
            <div className="wholepage">
                <h1 className="pagetitle"> React 15-puzzle </h1>
                <div className="game-area"  >
                    <div className="game-container"  style={ gamecontainerstyle }>
                        <UI navStyle={ uistyle } buttonStyle={ buttonstyle }/>
                        <Puzzle gridStyle={ gridStyle } containerStyle={ containerstyle } puzzleScale={ puzzleScale }/>
                        <Sidebar solving={ isSolving }/>
                    </div>
                </div>
                <div className="writeup">
                    <p className="pagedescription">Every good challenge ends with a slide puzzle. Can you uncover the hidden image and get your reward?</p>
                    <p className="pagedescription">Nati Ready? Go!</p>
                </div>
            </div>
        );
    }else{
        return (
            <div className="game-area"  >
                <div className="game-container"  style={ gamecontainerstyle }>
                    <UI navStyle={ uistyle } buttonStyle={ buttonstyle }/>
                    <Puzzle gridStyle={ gridStyle } containerStyle={ containerstyle } puzzleScale={ puzzleScale }/>
                    <Sidebar solving={ isSolving }/>
                </div>
            </div>
        );
    }
}


export default GameView;