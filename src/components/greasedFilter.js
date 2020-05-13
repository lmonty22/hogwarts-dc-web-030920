import React, {Component} from 'react'


class greasedFilter extends Component {

    render () {
        return (
            <form>
                <input type="checkbox" value={this.props.greasedFilter} name="hog" onChange={this.props.handleGreasedFilter}/>
                <label for="hog"> Show Greased Hogs</label>
            </form>
        )
    }
}
export default greasedFilter;