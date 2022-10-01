import { Component } from "react"
import { nanoid } from "nanoid"
import { ContactList } from "./ContactList/ContactList"
import { ContactForm } from "./ContactForm/ContactForm"
import { Filter } from "./Filter/Filter"
  
export class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }
  


  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  }
  getVisibleFriends = () => {
    const { filter, contacts } = this.state
    const normalizedFilter = filter.toLocaleLowerCase()
    
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }
  

///////////////////////////////////////
  addFreind = ({name, number}) => {
    
    this.state.contacts.filter(el => {
      el.name.toLowerCase() === name.toLowerCase()
        ? console.log('Есть контакт!')
        : console.log('Такого контакта нету')
    })
    const contact = {
      id: nanoid(),
      name,
      number,
    }
    
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
        <Filter
          value={this.state.filter}
          onChange={this.changeFilter} />
        <ContactList
          contacts={this.getVisibleFriends()}/>
        
      </div>
      </div>
  }
};
