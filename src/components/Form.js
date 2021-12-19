import { Component } from 'react';

class Form extends Component{
    state = {
        email: '' ,
        password: ''
    }

    componentDidMount(){
        console.log('did mount!')
    }

    onChangeHandler = (event) => {
        const {name, value} = event.target; 
        this.setState({ 
            [name]: value
        }, () => {
            console.log(this.state)
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log('Sent');
    }

    render(){
        return(
            <>
                <form onSubmit={event => this.onSubmitHandler(event)}>
                    <input type="email" name="email" onChange={event => this.onChangeHandler(event)}/>
                    <input type="password" name="password" onChange={event => this.onChangeHandler(event)} />
                    <button type="submit">Click me!</button>
                </form>
            </>
        )
    }

    
}

export default Form;