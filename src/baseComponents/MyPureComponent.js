import React from "react";

class MyPureComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        for (const propKey of Object.keys(this.props)) {
            if (!Object.is(this.props[propKey], nextProps[propKey])) return true;
        }
        // console.log(nextState); // null
        // console.log(this.state); // null
        // for (const stateKey of Object.keys(this.state)) {
        //     if (!Object.is(this.state[stateKey], nextState[stateKey])) return true;
        // }
        return false;
    }

}

export default MyPureComponent;
