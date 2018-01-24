import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import Ticket from './Ticket';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    this.handleUpVote = this.handleUpVote.bind(this);
  }

  handleAddingNewTicketToList(newTicket) {
    var newMasterTicketList = this.state.masterTicketList.slice();
    newTicket.voteTotal = 0;
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  handleUpVote() {
    this.voteTotal = ticketId.voteTotal+=1;
    console.log("APPPSFJDSFJDSF");
  }

  handleDownVote(ticketId) {
    this.voteTotal = ticketId.voteTotal-=1;
    console.log('click Down');
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />

          <Route path='/ticket' render={()=><Ticket onUpVote={this.handleUpVote} onDownVote={this.handleDownVote} />} />

          <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />


          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
