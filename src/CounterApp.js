import React from 'react';

function CounterDisplay({ count }) {
    if (count === 0) {
        return <p>{count}</p>;
    }

    if (count % 5 === 0 && count % 7 === 0) {
        return <p>FizzBuzz</p>;
    }

    if (count % 5 === 0) {
        return <p>Fizz</p>;
    }

    if (count % 7 === 0) {
        return <p>Buzz</p>;
    }

    return <p>{count}</p>;
}

function IncreaseButton({ increase }) {
    return (
        <div>
            <button onClick={increase}>+ increase</button>
        </div>
    );
}

function ResetButton({ reset }) {
    return (
        <div>
            <button onClick={reset}>? reset</button>
        </div>
    );
}

class CounterApp extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi nilai state count 0
        this.state = {
            count: 0
        };
        //binding event handler
        this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
        this.onResetEventHandler = this.onResetEventHandler.bind(this);
    }

    //buat event handler
    onIncreaseEventHandler() {
        this.setState((previousState) => {
            return {
                count: previousState.count + 1
            };
        });
    }

    onResetEventHandler() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                <IncreaseButton increase={this.onIncreaseEventHandler} />
                <CounterDisplay count={this.state.count} />
                <ResetButton reset={this.onResetEventHandler} />
            </div>
        )
    }
}

export default CounterApp;