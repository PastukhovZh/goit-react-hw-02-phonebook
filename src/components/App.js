import { Component } from "react"
import { nanoid } from "nanoid"
import { ContactList } from "./ContactList/ContactList"
import { ContactForm } from "./ContactForm/ContactForm"
  
export class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  }
  
///////////////////////////////////////
  addFreind = ({name}) => {
    const contact = {
      id: nanoid(),
      name,
    }
    this.setState(prevState => ({
      contacts:[...prevState.contacts, contact]
    }))
  }
  
  // getAllFriends = () => {
  //   const {contacts} =this.state
  // }
  
  render() {
    return <div>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={ this.addFreind}/>
        </div>
      <div>
        <h2>Contacts</h2>
<ul>
        {this.state.contacts.map(({id, name}) => (
                <li key={id}>
                    <p>{name}</p>
                </li>
            )
        )}
    </ul>
      </div>
      </div>
  }
};
