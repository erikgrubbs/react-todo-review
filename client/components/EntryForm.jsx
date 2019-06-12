import React from 'react';


class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }

    this.handleInput = this.handleInput.bind(this);
    this.onSubmitChange = this.onSubmitChange.bind(this);
  }

  handleInput(e) {
    this.setState({
      text: e.target.value
    });
  }

  onSubmitChange(e) {
    e.preventDefault();
    this.props.addItem(this.state.text);
    document.getElementById('form').value = ('');
  }

  render() {
    return (
      <div className="entry">
        <form onSubmit={this.onSubmitChange}>
          <label>Add a place you wants to go boy</label>
          <input id='form' onChange={this.handleInput} type="text"/>
          <button>ADD IT TO THAT LIST</button>
        </form>  
      </div>
    );
  }
}

export default EntryForm;