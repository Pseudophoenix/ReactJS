import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }
    
    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    }
    Reset = () => {
        this.setState({ count:0});
    }
    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick={this.increment} className='btn btn-primary ml-2'>Increment {this.state.count}</button>
                <button onClick={this.decrement} className='btn btn-secondary ml-2'>Decrement</button>
                <button onClick={this.Reset} className='btn ml-2' style={{"backgroundColor":"red","color":"white"}}>Reset</button>
            </div>
        )
    }
}

export default ClassCounter