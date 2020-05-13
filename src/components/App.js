import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import Index from './Index'
import FeaturedHog from './featuredHog'
import GreasedFilter from './greasedFilter'
import SortBy from './sortBy'

class App extends Component {

  constructor(){
    super()
    this.state = {
      hogs: hogs,
      featuredHog: hogs[0],
      greasedFilter: false, 
      sortBy: 'none' 
    }
  }

   /// some function here which reorders the hogs array depending on the sortBy state


  filterGreasedHogs = () => {
    const greasedHogs = this.state.hogs.filter(hog => hog.greased)
    this.setState({
      hogs: greasedHogs
    })
  }

  revertHogs = () => {
    this.setState({
      hogs: hogs
    })
    this.checkSortState()
  }

  handleFeaturedHog = (hog) => {
    this.setState({
      featuredHog: hog
    })
   
  }

  handleGreasedFilter = () => {
    const newState = !this.state.greasedFilter
    this.setState({
      greasedFilter: newState
    })
    newState? this.filterGreasedHogs() : this.revertHogs()
  }

  checkSortState = () => {
    const newSort = this.state.sort
    if (newSort === 'name'){
      this.sortByName()
    }
    else if(newSort === 'none'){
      this.revertHogs()
    } else if (newSort === 'weight'){
      this.sortByWeight()
    }
  }

  handleSortBy = (event) => {
    const newSort = event.target.value
    this.setState({
      sortBy: newSort
    })
    if (newSort === 'name'){
      this.sortByName()
    }
    else if(newSort === 'none'){
      this.revertHogs()
    } else if (newSort === 'weight'){
      this.sortByWeight()
    }
  }


  sortByName = () => {
    // const newHogsArray = this.state.hogs
    const clone = this.state.hogs.slice(0)
    clone.sort(function(a, b) {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    this.setState({
      hogs: clone
    })
  }

//   // sort by value
// items.sort(function (a, b) {
//   return a.value - b.value;
// });

  sortByWeight = () => {
    const clone = this.state.hogs.slice(0)
    clone.sort(function(a,b){
      return a.weight - b.weight;
    })
    this.setState({
      hogs: clone 
    })
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <FeaturedHog hog={this.state.featuredHog} />
        <h2>All the hogs</h2>
        <GreasedFilter handleGreasedFilter={this.handleGreasedFilter} greasedFilter={this.state.greasedFilter}/>
        <SortBy handleSortBy={this.handleSortBy} />
        <Index hogs={this.state.hogs} handleFeaturedHog={this.handleFeaturedHog} />
      
      </div>
    );
  }
}

export default App;
