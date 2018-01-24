import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props) {


  function voting(ticket) {
    console.log("voting function")
    props.onUpVote(ticket);
  }

  return (
    <div>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <button onClick={voting}>UpVote</button>

      <p>{props.voteTotal}</p>
      <hr/>
    </div>
  );
}


Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  voteTotal: PropTypes.number,
  id: PropTypes.string,
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func
};

export default Ticket;
