/**
 * Created by chenrs on 2016/8/12.
 */
'use strict';
// Import React
import React from 'react';

// Create class called Head that extends the base React Component class

let myAge = 18;
class Head extends React.Component {
    constructor(...props) {
        super(...props);
        this.state = {
            myName: this.props.title
        };
    }
    _handleClick() {
        this.setState({
            myName: 'creat react component'
        })
    }
    render() {
        return (
            <section className="header">
                <div onClick={this._handleClick.bind(this)}><i className="icon_go_back"></i>
                    <span>{this.props.name}--{this.state.myName}--{myAge}</span>
                </div>
            </section>
        )
    }
}
export default Head;