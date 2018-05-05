import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import '../assets/css/app.css';
import List from './list'
import AddItem from './add_input'
import list_data from '../helpers/list_data';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
// const API_KEY = '?key=c118demouser';
const API_KEY = '?key=c318alia';

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

    async addItem(item) {
        console.log(item);
        // 
        await axios.post(`${BASE_URL}/todos/${API_KEY}`, item);
        this.getListData();
    }

    async deleteItem(id) {
        // const list_data = this.state.list_data.slice(); //this version does it on the dom

        // list_data.splice(item, 1);

        // this.setState({ list_data });
        await axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);
        this.getListData();

    }

    async getListData() { //most browsers dont support async await, but bable makes the dream work

        try { //this is core javascript, to try out script without it affecting your database
            // axios.get(`${BASE_URL}/todos${API_KEY}`).then(resp => { //this is the older way of doing it (ES6)
            //     console.log('Resp: ', resp.data.todos);

            //     this.setState({
            //         list_data: resp.data.todos
            //     })
            // })
            const response = await axios.get(`${BASE_URL}/todos${API_KEY}`)

            this.setState({
                list_data: response.data.todos
            })
        } catch (error) {
            console.log('ERROR: ', error.message)
        }

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
