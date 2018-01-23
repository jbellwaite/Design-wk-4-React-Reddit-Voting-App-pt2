import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props) {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     voteTotal: 0
  //   };
  //   this.handleClickUp = this.handleClickUp.bind(this);
  //   this.handleClickDown = this.handleClickDown.bind(this);
  // }
  //
  // handleClickUp(){
  //   let newVoteUp = this.state.voteTotal+=1;
  //   this.setState({voteTotal: newVoteUp});
  // }
  //
  // handleClickDown(){
  //   let newVoteDown = this.state.voteTotal-=1;
  //   this.setState({voteTotal: newVoteDown});
  // }

    return (
      <div>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <button onClick={this.handleClickUp}>UpVote</button><span>   </span><button onClick={this.handleClickDown}>DownVote</button>
        <p>{props.voteTotal}</p>
        <hr/>
      </div>
    );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
};

export default Ticket;
