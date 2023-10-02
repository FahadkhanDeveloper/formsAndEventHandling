import React, { Component } from 'react'
import axios from 'axios'
export default class  extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state={
             keyword: "",
             results:[]
        }
    }
    async handleSubmit(e) {
        e.preventDefault();
        //  console.log(e)
        // this is uncontrol component because state dont know about this data that what is in the field
        // controled component is when we change the data in component it will be assign to state

        // console.log(e.target.elements.search.value)
        // e get data from state this concept is controled component data in Dom is match with data in state

        // console.log(this.state.keyword)
        const key = "_6BxmIaoA4_E59wZFWYzf_2cfbVSZo7S-QMrnuDcLJE"
        const term = this.state.keyword
        const {data} = await axios.get(`https://api.unsplash.com/search/photos?client_id=${key}&query=${term}`)
        // console.log(data)
        this.setState({
            results: data.results
        })
    }
    handleChange(e) {
        // console.log("Changed...")
        this.setState({
            keyword: e.target.value
        })
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input 
            type="text" 
            name="search" 
            id="search" 
            onChange={this.handleChange}
            value={this.state.keyword}
            />
            <button id="searchBtn">Click</button>
        </form>
        <div>
            {
                this.state.results.map(image => {
                    return <img src={image.urls.small} alt={image.alt_description}/>
                })
            }
        </div>
      </div>
    )
  }
}
