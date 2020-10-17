import React, {Component} from 'react';
import './App.css';

import {CardList} from './components/card-list/cardlist';
import {SearchBox} from './components/search-box/searchbox';

class App extends Component {

  constructor() {
    super();
    this.state = {
      friends: [],
      searchTerm: ""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({friends: users}));
  }

  handleChange = e => {
    this.setState({searchTerm: e.target.value});
                  }

  render() {
    const {searchTerm, friends} = this.state;
    const filteredFriends= friends.filter(
      friend => friend.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
      <div className="App">
        <h1>Find a Friend</h1>
        <SearchBox placeholder="type a friends name"
                   handleChange={this.handleChange}
          />
        <CardList friends={filteredFriends} />     
      </div>
    );
  }
}

export default App;
