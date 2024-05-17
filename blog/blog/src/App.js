import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar';
import { Component } from 'react';
import axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
        auth:false,
        title:null,
    }
    console.log("[App]Constructor");
}
static getDerivedStateFromProps(props,state)
{
  console.log("[App]getDerivedStateFromProps");
  return null;
}

componentWillUnmount(){
  console.log("[App]componentWillUnmount");
}
componentDidMount()
{
  axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
    console.log(response.data[0].title);
    this.setState({title:response.data[0].title},()=>{
    console.log("");
    })
  }).catch((error)=>{
    console.log(error);
  })
  // this.setState({auth:true});
  console.log('[App]ComponentDidMount');
}
toggle=(event)=>{
  this.setState({auth:!this.state.auth},()=>{
    console.log(this.state.auth);
  });
}
  render() {
    return (
      <div className="App">
        {this.state.auth?<NavBar title={this.state.title}/>:""}
        <button onClick={this.toggle}  className='btn btn-primary'>Click me</button>
      </div>
    );
  }
}

export default App;
