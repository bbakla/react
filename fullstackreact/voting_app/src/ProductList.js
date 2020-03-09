import React, {Component} from "react";
import {Product} from "./Product";
import {productList} from "./data.js";

export class ProductList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        this.setState({products : productList})
    }

    //This function modifies the original state directly. That is why we dont use it
/*    handleProductUpVote = (productId) => {
        const products = this.state.products;

        products.forEach( (product) => {
            if(product.id === productId) {
                product.votes = product.votes + 1;
            }
        });

        this.setState({products: products});
    }*/

handleProductUpVote = productId => {
    const nextProducts = this.state.products.map(product => {
        if(product.id ===productId) {
            return Object.assign({}, product, {votes: product.votes + 1, });
        } else {
            return product;
        }
    });

    this.setState({products: nextProducts});
}

    render() {

        return (
            <div>
                {
                    this.state.products.sort((a, b) => (b.votes - a.votes))
                        .map(product =>  <Product key = {'product - ' + product.id}
                                                             id = {product.id}
                                                         title={product.title}
                                                         description = {product.description}
                                                         url = {product.url}
                                                         votes = {product.votes}
                                                         submitterAvatarUrl = {product.submitterAvatarUrl}
                                                         productImageUrl = {product.productImageUrl}
                                                         onVote={this.handleProductUpVote}

                    />)

                }
            </div>
        );
    }

}
