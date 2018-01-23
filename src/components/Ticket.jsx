import React from 'react';
import PropTypes from 'prop-types';

class Ticket extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      voteTotal: 0
    };
    this.handleClickUp = this.handleClickUp.bind(this);
    this.handleClickDown = this.handleClickDown.bind(this);
  }

  handleClickUp(){
    let newVoteUp = this.state.voteTotal+=1;
    this.setState({voteTotal: newVoteUp});
  }

  handleClickDown(){
    let newVoteDown = this.state.voteTotal-=1;
    this.setState({voteTotal: newVoteDown});
  }

  render(){
    return (
      <div>
        <h3>{this.props.location} - {this.props.names}</h3>
        <p><em>{this.props.issue}</em></p>
        <button onClick={this.handleClickUp}>UpVote</button><span>   </span><button onClick={this.handleClickDown}>DownVote</button>
        <p>{this.state.voteTotal}</p>
        <hr/>
      </div>
    );
  }
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
};

export default Ticket;
