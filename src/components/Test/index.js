import React from 'react'
import { DataConsumer } from '../../ContextAPI/Context';

class Test extends React.Component {
    constructor(props){
        super(props);
        this.state = {places: {}}
    }

    handleChange(event){
        this.setState({
            value:event.target.value
        })

        this.props.callback(this.state.value)
    }

    render() {
        return (
            <div>
                <DataConsumer>
                    {value => <p>{value}</p>}
                </DataConsumer>
                <input type="text" value={this.state.value} onChange={(event) => this.handleChange(event)}/>
            </div>

        )
    }
}


export default Test 