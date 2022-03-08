import React, { Component } from 'react';

class Box extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {text, number} = this.props;

        return(
            <div>
                <marquee>
                    <h1>{text}</h1>
                    <h2>{number}</h2>
                    <h2>{(number > 0) ? "Positive" : "Negative"}</h2>
                    {this.props.children}
                </marquee>
            </div>
        )
    }
}

export default Box;
