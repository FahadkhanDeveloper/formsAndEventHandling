import { Component } from 'react'

export default class Events extends Component {
    constructor() {
        super();
    }
    handleClick(e) {
        // console.log(e.target)
        if(e.target.name == "btn1") {
            console.log("Button 1 Clicked")
        }
        if(e.target.name == "btn2") {
            console.log("Button 2 Clicked")
        }
    }
  render() {
    return (
      <div>
        {/* e is event object (e) this is anonymus call back function */}
        <button 
         id="1"
         name="btn1"
         onClick={(e) => this.handleClick(e)}
         >Click 1
         </button>
        <button 
        id="2"
        name="btn2"
        onClick={(e) => this.handleClick(e)}
        >Click 2
        </button>
      </div>
    )
  }
}
