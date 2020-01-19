import React, {Component} from 'react';
import './Navbar.css';
import axios from 'axios'
import {Link} from "react-router-dom";

class Navbar extends Component {

    constructor(props) {
        super(props);

        this.hoho = this.hoho.bind(this);
    }

    hoho() {
        axios.get('http://localhost:9993/api/product',
            {
                withCredentials: true,
            })
            .then(value => console.log(value))
            .catch(reason => console.log(reason))
    }

    render() {
        return (
            <div>
                <button onClick={this.hoho}/>
                <div className="Navbar">
                    <Link to={"login"}> Product </Link>
                </div>
            </div>
        );
    }
}


export default Navbar;
