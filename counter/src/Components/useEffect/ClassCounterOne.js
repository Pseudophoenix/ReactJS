import React, { Component } from 'react'

export class ClassCounterOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
    }
  }
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = `Clicked ${this.state.count} times`
      console.log('Updating document title')
    }
  }
  render() {
    return (
      <div>
        <div className='d-flex justify-content-center'>
          <input className=" m-2 form-control w-25" name="name" type='text' value={this.state.name} onChange={(event) => { this.setState({ name: event.target.value }) }} />
        </div>
        <button className="mt-5 btn btn-primary" onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Click {this.state.count} times</button>
      </div>
    )
  }
}

export default ClassCounterOne