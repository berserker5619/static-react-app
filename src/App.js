import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component"
import './App.css';

class App extends Component {
  constructor() {
    super()//calls constructor of Component
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount() {//When React renders for the first time
    fetch('https://jsonplaceholder.typicode.com/users')//get users from api
      .then(response => response.json())//transform it into json
      .then(users => this.setState({ monsters: users }))//assign it to monsters array in state
  }
  onSearchChange=(e)=>{//By default js func doesnot specify their scope themselves 
    this.setState({ searchField: e.target.value })
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='Search Monsters'
          handleChange={this.onSearchChange} />{/* every time setState is called, render is recalled*/}
        <CardList monsters={filteredMonsters} />{/* monsters => Card-List(props.monsters) */}
      </div>
    );
  }
}

export default App;
