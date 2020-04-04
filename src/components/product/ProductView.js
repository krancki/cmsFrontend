import React, {Component} from "react";

import "./product.scss";
import {bindActionCreators} from "redux";
import {
    deleteProduct,
    sendProjectToEditModal
} from "../../actions/productActions";
import {connect} from "react-redux";

class ProductView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.element.id,
            productName: props.element.title,
            description: props.element.description,
            price: props.element.price
        };

        this.editProduct = this.editProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
        this.getProductButtons = this.getProductButtons.bind(this);
    }

    editProduct() {
        this.props.sendProjectToEditModal({
            id: this.state.id,
            title: this.state.productName,
            description: this.state.description,
            price: this.state.price
        })
    }

    removeProduct() {
        this.props.deleteProduct(this.state.id);
    }

    getProductButtons() {
        if (this.props.currentUser.isLogin === true)
            return (<div>
                    <button type="button" className="btn btn-outline-primary mr-2" data-toggle="modal"
                            data-target="#editProductModal" onClick={this.editProduct}>
                        Edit
                    </button>
                    <button type="button" className="btn btn-outline-danger" onClick={this.removeProduct}>Delete
                    </button>
                </div>
            )
    }

    render() {
        return (
            <tr>
                <th scope="row">{this.state.id}</th>
                <td>{this.state.productName}</td>
                <td>{this.state.description}</td>
                <td>{this.state.price}</td>
                <td>
                    {this.getProductButtons()}
                </td>
            </tr>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products,
        currentUser: state.currentUser
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({deleteProduct: deleteProduct, sendProjectToEditModal: sendProjectToEditModal}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ProductView);
