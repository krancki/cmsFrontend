import React, {Component} from 'react';
import Provider from "react-redux/es/components/Provider";
import store from "./store";
import AppRouter from "./AppRouter";
import "react-bootstrap";
import "validate.js";

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        )
    }
}


export default App;