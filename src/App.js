import React , {Component}from 'react';
import logo from './logo.svg';
import './App.css';
import ContactForm from "./contactForm";
import ContactList from "./contactList";

class App extends Component{

    state = {
        appTitle : "Contact Book"
    };


    changeAppTitle = (event)=>{
        this.setState({
            appTitle:event.target.value
        })
    }


    render() {
        return (
            <div className="App">
            <h2 className="App-title">{this.state.appTitle}</h2>
            <input type="text" onChange={this.changeAppTitle} value={this.state.appTitle} />
            <ContactForm/>
            <div className="contact-list-container">
            <ContactList/>
            </div>
            </div>
        );
}

}

export default App;
