import React from 'react';
import ListEntry from './ListEntry.jsx';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return( 
        <div className="center vertical" id="list">
            <ul>
              {this.props.destinations.map((place, i) => (
                <ListEntry deleter={this.props.deleter} place={place} index={i} key={place}/>
              ))}
            </ul>
        </div>
        );
    }
}

export default List;