import React, {Component} from 'react';
import './App.css';
import ContactForm from "./contactForm";
import ContactList from "./contactList";

class App extends Component {

    state = {
        isEditingTitle:false,
        appTitle: "Contact Book"
    };


    changeAppTitle = (event) => {
        this.setState({
            appTitle: event.target.value
        })
    }


    editTitleMode = ()=>{
        this.setState({
            isEditingTitle:true
        })
    };

    keyPress = (e) => {
        if(e.keyCode == 13){
            this.setState({
                isEditingTitle:false,
                appTitle : e.target.value
            })
        }
    };

    render() {
        return (
            <div className="App">
                {
                    this.state.isEditingTitle?
                        <input className="inputBox" type="text" onChange={this.changeAppTitle} onKeyDown={this.keyPress} value={this.state.appTitle}/>:
                        <h2 className="App-title" onClick={this.editTitleMode} >{this.state.appTitle}</h2>
                }
                {/*<h2 className="App-title">{this.state.appTitle}</h2>*/}
                {/*<input type="text" onChange={this.changeAppTitle} value={this.state.appTitle}/>*/}
                <ContactForm/>
                <div className="contact-list-container">
                    <ContactList/>
                </div>
            </div>
        );
    }

}

export default App;
