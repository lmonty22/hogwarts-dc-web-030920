import React, {Component} from 'react'
 

class FeaturedHog extends Component {

    render() {
        // 'highest medal achieved':
        const {name, weight, specialty, greased, highestMedal} = this.props.hog
        return (
            <div>
                <h1>The Featured Hog</h1>
                <div>{name}</div>
                <div>Weight: {weight}</div>
                <div>Specialty: {specialty}</div>
                <div>{greased? 'This Hog is Greased' : 'This Hog is Not Greased'} </div>
                 <div>Highest Medal Achieved: {highestMedal}</div>
            </div>
        )
    }

}
export default FeaturedHog;