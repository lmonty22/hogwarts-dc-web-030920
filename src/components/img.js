import React, {Component} from 'react'

class Img extends Component {
    render(){
        return(
            <figure class="image is-3by2">
                <img src={this.props.image} alt="Placeholder image"/>
            </figure>
        )
    }

    // render(){
    //     // let image = require('../logo.png') //how can we dynamically generate the filename?
    //     return 
    //         (<img src={this.props.image} alt="logo" className="brand-logo"/>)
    //   }
}
export default Img;