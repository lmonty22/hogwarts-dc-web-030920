import React, {Component} from 'react'
import HogTile from './hogTile'


class Index extends Component {
  
   
  
  
    render (){
        return (
            <div> 
            {this.props.hogs.map((hog, index) => <HogTile data={hog} key={index} handleFeaturedHog={this.props.handleFeaturedHog}/>)}
            </div>
        )
  }
} 

export default Index;