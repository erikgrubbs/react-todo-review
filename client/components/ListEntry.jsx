import React from 'react';

const ListEntry = ({place, deleter, index}) => {
    return (
        <div className="item">
          <li onClick={() => {deleter(index)}}>{place}</li>
        </div>
    );
};

export default ListEntry;