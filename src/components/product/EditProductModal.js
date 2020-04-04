import React, {Component} from "react";

import {editProduct, fetchProduct, insertProduct} from "../../actions/productActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class EditProductModal extends Component {

    constructor(props) {
        super(props);

        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.editProductSubmit = this.editProductSubmit.bind(this);

        this.state = {
            id: null,
            title: "",
            description: "",
            price: 0
        }
    }

    shouldComponentUpdate(prevProps, prevState, snapshot) {
        if(prevProps.editProductData.id !== this.state.id){
            this.setState(this.props.editProductData);
            return false
        }
        return true
    }

    handleCloseModal(event) {
        this.setState({
            id: null,
            title: "",
            description: "",
            price: 0.00
        });
    }

    handleChange(event) {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value
        });
    }

    editProductSubmit() {
        const {id, title, description, price} = this.state;
        this.props.editProduct({
            id: id,
            title: title,
            description: description,
            price: price
        });
        $("#editProductModal").modal("hide");
    }

    render() {
        return (
            <div className="modal fade" id="editProductModal" tabIndex="-1" role="dialog"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modal-title">Edit product</h5>
                            <button type="button" className="close" onClick={this.handleCloseModal} data-dismiss="modal"
                                    aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.editProductSubmit}>
                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="col-form-label">Title:</label>
                                    <input type="text" className="form-control" id="title"
                                           value={this.state.title}
                                           onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="col-form-label">Description:</label>
                                    <input type="text" className="form-control" id="description"
                                           value={this.state.description}
                                           onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message-text" className="col-form-label">Price:</label>
                                    <input type="number" className="form-control" id="price"
                                           value={this.state.price}
                                           onChange={this.handleChange}/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={this.handleCloseModal}
                                    data-dismiss="modal">Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={this.editProductSubmit}>Edit
                                product
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        editProductData: state.products.editProductData
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({editProduct: editProduct}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(EditProductModal);
