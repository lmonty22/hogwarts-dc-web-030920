import React from 'react'
import Img from './img'


class HogTile extends React.Component{
    
    snakeCase = (phrase) => {
        let arr = phrase.split(" ")
        return arr.map(str => str.toLowerCase()).join("_")
    }
    
    render(){
        let {name, specialty, greased, weight} = this.props.data
        let pigImage = require(`../hog-imgs/${this.snakeCase(name)}.jpg`)
        return ( 
            <div class="card" onClick={() => this.props.handleFeaturedHog(this.props.data)}>
            <div class="card-image">
              <Img image={pigImage}/>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                     <p class="title is-4">{name}</p>
                </div>
              </div>
          
            </div>
        //   </div>
        )
    }
}


export default HogTile