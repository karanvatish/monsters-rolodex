import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list-component';
import { SearchBox } from './components/search-box/search-box-component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
      .then(response => {
        this.setState({ monsters: response })
      });
  }

  changeHandler = e => {
    this.setState({ searchField: e.target.value }, () => { console.log(this.state) });
  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(item => item.name.toLowerCase().includes(searchField.toLocaleLowerCase()));

    return (
      <div className="App">

        <SearchBox placeholder='search' changeHandler={this.changeHandler} />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
