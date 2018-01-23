import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

class TicketList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      voteTotal: 0
    };
    this.handleClickUp = this.handleClickUp.bind(this);
    this.handleClickDown = this.handleClickDown.bind(this);
  }

  handleClickUp(){
    let newVoteUp = this.setState.voteTotal+=1;
    this.setState({voteTotal: newVoteUp});
  }

  handleClickDown(){
    let newVoteDown = this.setState.voteTotal-=1;
    this.setState({voteTotal: newVoteDown});
  }

  render(){
    return (
      <div>
        <hr/>
        <Ticket voteTotal={this.state.voteTotal} />
        {this.props.ticketList.map((ticket) =>
            <Ticket names={ticket.names}
              location={ticket.location}
              issue={ticket.issue}
              voteTotal= {ticket.voteTotal}
              key={ticket.id}/>
        )}

      </div>
    );
  }
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;
