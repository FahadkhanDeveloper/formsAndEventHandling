import { Component } from 'react'

export default class Todo extends Component {
    constructor() {
        super();
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state={
            item:"",
            list:[]
        }
    }
    handleChange(e) {
       this.setState({
         item: e.target.value
       })
    }
    // TO Do 
    // Keyboard integeration
    // Deletion
    // Search
    handleSubmit(e) {
        e.preventDefault();
        if(this.state.item == "") {
            alert("empty item not allowed")
        }
        // if(this.state.list.includes(this.state.item)) { 
            // or

          else if(this.state.list.indexOf(this.state.item) < 0) {
            this.setState({
                list:this.state.list.concat(this.state.item),
                item:""
            })
            e.target.value=this.state.item
        }
        else{
            alert("Item already exists")
        }
          
    }
    handleBlur(e) {
         e.target.value=""
    }
  render() {
    return (
      <div>
           <form onSubmit={this.handleSubmit}>
            <input
            type="text"
            id="item"
            name="item"
            value={this.state.item}
            onChange={this.handleChange}
            onFocus={this.handleBlur}
            />
            <button>Add</button>
           </form>
           <ul>
               {
                this.state.list.map((l,i) => <li key={i}>{l}</li>)
               }
           </ul>
           <button onClick={() => this.setState({
            list:[]
           })}>Reset</button>
      </div>
    )
  }
}
