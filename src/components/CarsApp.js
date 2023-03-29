import React from "react";
import Car from "./Car";
import SellButton from "./SellButton";

// uuid: universal unique id
/*
shallow copy (spread operator): copy only the first level of the properties
deep copy: recursive
loose comparison: ==
strict comparison: ===
shallow comparison: comparing the first level of the key value pairs, to do it, we can first check the length, then key value pairs
deep comparison: compare all the nested values recursively
React.memo: hoc, shouldComponentUpdate
useMemo
useCallback
*/

class CarsApp extends React.Component {
    state = {
        cars: [
            {
                make: "Toyota",
                quantity: 10,
                id: 1
            },
            {
                make: "Honda",
                quantity: 5,
                id: 2,
            },
            {
                make: "Nissan",
                quantity: 7,
                id: 3,
            },
        ],
    };

    handleSell = (index) => {
        this.setState((prev) => {
            const nextState = {
                ...prev,
                cars: [
                    ...prev.cars.slice(0, index),
                    {
                        ...prev.cars[index],
                        quantity: prev.cars[index].quantity - 1,
                    },
                    ...prev.cars.slice(index + 1),
                ],
            };
            return nextState;
        });
    };

    render() {
        console.log("Rerender CarsApp");
        return (
            <>
                <div>
                    {this.state.cars.map((car) => (
                        <Car key={car.id} carData={car} />
                    ))}
                </div>
                <div>
                    {this.state.cars.map((car, index) => (
                        <SellButton
                            key={car.id}
                            handleSell={() => this.handleSell(index)}
                            carData={car}
                        />
                    ))}
                </div>
            </>
        );
    }
}

export default CarsApp;