import React, { Component } from 'react';
import { CardList } from './Components/card-list/card-list.component.js';
import { SearchBox } from './Components/search-box/search-box.component.js';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { monsters: [], searchField: '' };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="AppTitle">Monsters Rolodex</h1>
        <SearchBox
          placeholder='search for monsters'
          handleChange={this.handleChange}
        >
        </SearchBox>
        <CardList monsters={filteredMonsters} >
        </CardList>
      </div>
    );
  }
}

export default App;
