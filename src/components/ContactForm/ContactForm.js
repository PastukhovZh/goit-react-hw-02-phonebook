import { Component } from "react";

export class ContactForm extends Component{
    state = {
    name:''
}

//   handleChange = e => {
//     const { name, value } = e.currentTarget
    
//     this.setState({ [name]: value });
//     }
    handleChange = name => e => {
    const { target } = e;

    this.setState(() => ({
      [name]: target.value,
    }));
  };
    
  handleSubmit = e => {
    e.preventDefault()
const { onSubmit } = this.props;
      onSubmit(this.state);
      this.reset();
    
    }
    reset = () => {
        this.setState(() => ({
            name:''
        }))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
        <label> Name
            <input
                onChange={this.handleChange('name')}
                value={this.state.name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </label>
        <button type="submit">Add friend</button>
        </form>
        )
    }
        }