import { Component } from "react";
import Home from "./components/home/Home";
import './App.css'


class App extends Component {
  constructor() {
    super()

    this.state={
      demo:[]
      // demo:[
      //   {name:"hello"},
      //   {name:"welcome"},
      //   {name:"heyyy"}
      // ]
      // ,
      // name:"shayal",
      // age:3657,
      // count:0
    }

  }

  componentDidMount(){
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response)=>response.json())
    .then((result)=>this.setState({demo:result.results}))
  }


  render(){
  return(
    
    <div>
      {/* <h2>{this.state.count}</h2>
      <button onClick={()=>this.setState({count:this.state.count+1})}>+</button>
      <button onClick={()=>this.setState({count:this.state.count-1})}>-</button>
      <h1>this.state.age</h1>
      <h1>{this.state.age}</h1>
      <button onClick={()=>this.setState({age:"welcome"})}>change me</button>
      <p>jjhkh</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dignissimos neque accusamus illum fugit, quos qui reiciendis velit provident tempore minima porro molestiae aliquid, voluptate laboriosam nulla ipsam doloremque suscipit?</p>
      <div>hkjkhkhk</div> */}


      {/* <Home data={this.state}/> */}

      {this.state.demo.map((value)=>{
        return <h1>{value.name}</h1> 
        })}




    </div>
  )
}
}

export default App