import React from 'react';
import List from './list.jsx';
import EntryForm from './EntryForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      destinations: ['Shanghai', 'Italy', 'France', 'England', 'Ireland', 'South Africa']
      };
    this.itemClickDeleter = this.itemClickDeleter.bind(this);
    this.addItem = this.addItem.bind(this);  
  }

  render() {
    return( 
      <div id="mainApp" className="center vertical">
        <div className="title">Hello Where would you like to travel??</div>
        <EntryForm addItem={this.addItem}/>
        <List deleter={this.itemClickDeleter} destinations={this.state.destinations}/>
      </div> 
    );
  }

  itemClickDeleter(index) {
    var holder = this.state.destinations.slice();
    holder.splice(index, 1);
    this.setState({
      destinations: holder
    });
  }
  
  addItem(item) {
    var holder = this.state.destinations.slice();
    holder.push(item);
    this.setState({
      destinations: holder
    });
  }
}

export default App;