import React, { Component } from 'react';

class Box extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <marquee>
                    <h1>{this.props.text}</h1>
                </marquee>
            </div>
        )
    }
}

export default Box;
