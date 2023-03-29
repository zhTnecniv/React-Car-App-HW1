import React from "react";

const myMemo = (InnerComponent) => {

    class WrappedComponent extends React.Component {

        shouldComponentUpdate(nextProps, nextState) {
            if (Object.keys(this.props).length !== Object.keys(nextProps).length) return true;
            for (const propKey of Object.keys(this.props)) {
                if (!Object.is(this.props[propKey], nextProps[propKey])) return true;
            }
            return false;
        }

        render() {
            return (
                <InnerComponent {...this.props} />
            );
        }
    }

    return WrappedComponent;

}

export default myMemo;
