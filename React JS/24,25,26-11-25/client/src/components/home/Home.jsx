import { Component } from "react";

class Home extends Component {
    constructor() {
        super()
    }

    render(){
        return(
            <div>
                <h1>Home pagee</h1>
                <h1>{this.props.data}</h1>
            </div>
        )
    }
}

export default Home