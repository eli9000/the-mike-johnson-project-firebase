import React, { Component } from 'react';
import firebase from 'firebase';
import fire from './fire';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  componentWillMount() {
    /* Create reference to messages in Firebase Database */
    let messsagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messsagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  }

  addMessage(e) {
    e.preventDefault(); // <- prevent page reload on submit
    /* Send message to Firebase */
    fire.database().ref('messages').push(this.inputEl.value);
    this.inputEl.value = ''; // <- clear input
  }

  render() {
    return (
      <div className="Apple">
        <div className="ish">
          Please submit your memory of our dear father: <br />
          <form onSubmit={this.addMessage.bind(this)}>
            <input type="text" ref={el => this.inputEl = el} />
            <input type="submit" />
            <ul>
              {
                this.state.messages.map(message => <li key={message.id}>{message.text}</li>)
              }
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
