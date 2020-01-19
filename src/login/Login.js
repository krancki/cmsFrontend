import React, {Component} from 'react';
import './Login.css';
import axios from 'axios'

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {

        const formData= new FormData()
        formData.append("username","user");
        formData.append("password", "xxxx");

        axios.post("http://localhost:9993/login", formData, {
            credentials:"include"
        })
            .then(value => console.log("bry",value))
            .catch(reason => console.log(reason))
    }

    handleChange(event) {
        const {target} = event;
        const name = target.name;

        this.setState({
            [name]: target.value
        });

    }

    render() {
        return (
            <div>
                <form onClick={this.handleSubmit}>
                    Login:
                    <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/>
                    Password:
                    <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
                    <input type="submit" value="Log in "/>
                </form>
            </div>
        );
    }
}

export default Login