import React from "react";

class MyPureComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        if (Object.keys(this.props).length !== Object.keys(nextProps).length) return true;
        for (const propKey of Object.keys(this.props)) {
            if (!Object.is(this.props[propKey], nextProps[propKey])) return true;
        }
        nextState = nextState || {};
        this.state = this.state || {};
        if (Object.keys(this.state).length !== Object.keys(nextState).length) return true;
        for (const stateKey of Object.keys(this.state)) {
            if (!Object.is(this.state[stateKey], nextState[stateKey])) return true;
        }
        return false;
    }

}

export default MyPureComponent;
