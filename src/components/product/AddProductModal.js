import React, {Component} from "react";

import {fetchProduct, insertProduct} from "../../actions/productActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class AddProductModal extends Component {

    constructor(props) {
        super(props);

        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.createProductSubmit = this.createProductSubmit.bind(this);

        this.state = {
            createTitle: "",
            createDescription: "",
            createPrice: 0.00
        }
    }

    handleCloseModal(event) {
        this.setState({
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

    createProductSubmit() {
        const {createTitle,createDescription,createPrice} = this.state;
        this.props.insertProduct({
            title: createTitle,
            description: createDescription,
            price: createPrice
        });
        $("#createProductModal").modal("hide");
    }

    render() {
        return (
            <div className="modal fade" id="createProductModal" tabIndex="-1" role="dialog"
                  aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modal-title">Create new product</h5>
                            <button type="button" className="close" onClick={this.handleCloseModal} data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.createProductSubmit}>
                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="col-form-label">Title:</label>
                                    <input type="text" className="form-control" id="createTitle"
                                           value={this.state.title}
                                           onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="recipient-name" className="col-form-label">Description:</label>
                                    <input type="text" className="form-control" id="createDescription"
                                           value={this.state.description}
                                           onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message-text" className="col-form-label">Price:</label>
                                    <input type="number" className="form-control" id="createPrice"
                                           value={this.state.price}
                                           onChange={this.handleChange}/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={this.handleCloseModal} data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.createProductSubmit}>Create product</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({insertProduct: insertProduct, fetchProducts: fetchProduct}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(AddProductModal);
