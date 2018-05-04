import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import '../assets/css/app.css';
import List from './list'
import AddItem from './add_input'
import list_data from '../helpers/list_data';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list_data: []
        }
    }

    componentDidMount() {
        this.getListData();
    }

    addItem(item) {
        this.setState({
            list_data: [item, ...this.state.list_data]
        })
    }
    deleteItem(item) {
        const list_data = this.state.list_data.slice();

        list_data.splice(item, 1);

        this.setState({ list_data });
    }

    getListData() {
        setTimeout(() => this.setState({ list_data }),
            500);
    }

    render() {
        return (
            <div className="container">
                <h1 className="center">To Do List</h1>
                <AddItem add={this.addItem.bind(this)} />
                <List data={this.state.list_data} delete={this.deleteItem.bind(this)} />
            </div>
        )
    };
}

export default App;
