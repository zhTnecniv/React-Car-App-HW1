import React from "react";
import MyPureComponent from "../baseComponents/MyPureComponent";
import myMemo from "../hoc/myMemo";

class Car extends React.Component {

    // state = {
    //     name: "car component"
    // }
    // shouldComponentUpdate(nextProps, nextState) {
    //     const { make, quantity, id } = this.props.carData;
    //     const {
    //         make: nextMake,
    //         quantity: nextQuantity,
    //         id: nextId } = nextProps.carData;

    //     if (quantity === nextQuantity) return false;
    //     return true;
    // }

    render() {
        const { make, quantity } = this.props.carData;
        console.log("Re-render ", make);
        return (
            <div
                style={{
                    border: "1px solid black",
                    display: "inline-block",
                    width: "100px",
                    height: "100px",
                    margin: "20px",
                }}
            >
                <p>{make}</p>
                <p>{quantity}</p>
            </div>
        );
    }
}

export default myMemo(Car);



    // shouldComponentUpdate(nextProps, nextState) {
    //   const { make, quantity, id } = this.props.carData;
    //   const {
    //     make: nextMake,
    //     quantity: nextQuantity,
    //     id: nextId,
    //   } = nextProps.carData;

    //   console.log(quantity, nextQuantity);
    //   if (this.props.carData === nextProps.carData) {
    //     return false;
    //   }
    //   // if (quantity === nextQuantity) {
    //   //   return false;
    //   // }
    //   return true;
    //   // return false;
    // }