import React, {Component} from "react";

import {fetchProduct} from "../../actions/productActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import ProductView from "./ProductView";
import AddProductModal from "./AddProductModal";
import EditProductModal from "./EditProductModal";


class Product extends Component {

    constructor(props) {
        super(props);
        this.createProductsTable = this.createProductsTable.bind(this);
        this.getCreateProductButton = this.getCreateProductButton.bind(this);
    }

    componentDidMount() {
        this.props.fetchProduct();
    }

    createProductsTable() {
        const {products} = this.props;
        return (products.products || []).map(element => {
            return <ProductView key={element.id} element={element}/>
        });
    }

    getCreateProductButton() {
        if(this.props.currentUser.isLogin === true)
        return (
        <button type="button" className="btn btn-outline-success" data-toggle="modal"
                data-target="#createProductModal">
            Add new
        </button>
        )
    }

    render() {
        return (
            <div id="AboutContainer"
                 className="d-flex align-content-start flex-wrap justify-content-center   pt-5 mx-5">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.createProductsTable()}
                    </tbody>
                </table>
                {this.getCreateProductButton()}
                <AddProductModal/>
                <EditProductModal/>
            </div>
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
    return bindActionCreators({fetchProduct: fetchProduct}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(Product);
