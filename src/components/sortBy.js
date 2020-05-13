import React, {Component} from 'react'

class SortBy extends Component {

    render() {
        return (
            <div>
                <h3>Sort By :</h3>
                 < select onChange={this.props.handleSortBy}>
                    <option value="none" selected> None </option>
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
            </div>
           
        )
    }
}
export default SortBy;