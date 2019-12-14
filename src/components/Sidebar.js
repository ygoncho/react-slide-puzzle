import React, { Component } from 'react';
import SolvingAnim from './SolvingAnim';
import gitmark from '../images/GitHub-Mark-64px.png';

class Sidebar extends Component{

    render(){


        return (
            <div className="sidebar">
                <SolvingAnim solving={this.props.solving}/>
                <figure >
                </figure>

            </div>
        )
    }
}

export default Sidebar;