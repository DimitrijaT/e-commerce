import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Manufacturers from "../Manufacturers/manufacturers";
import EShopService from "../../repository/eshopRepository";
import Products from "../Products/ProductList/products";
import Categories from "../Categories/categories";
import Header from "../Header/header";
import manufacturers from "../Manufacturers/manufacturers";
import ProductAdd from "../Products/ProductAdd/productAdd";
import ProductEdit from "../Products/ProductEdit/productEdit";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            manufacturers: [], products: [], categories: [], selectedProduct: []
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <header/>
                    <div className="container">
                        <Routes>
                            <Route path={"/manufacturers"}
                                   element={<Manufacturers manufacturers={this.state.manufacturers}/>}/>
                            <Route path={"/categories"}
                                   element={<Categories categories={this.state.categories}/>}/>
                            <Route path={"/products/add"}
                                   element={<ProductAdd manufacturers={this.state.manufacturers}
                                                        categories={this.state.categories}
                                                        onAddProduct={this.addProduct}/>}/>
                            <Route path={"/products/edit/:id"}
                                   element={<ProductEdit manufacturers={this.state.manufacturers}
                                                         categories={this.state.categories}
                                                         onEditProduct={this.editProduct}
                                                         product={this.state.selectedProduct}/>}/>
                            <Route path={"/products"}
                                   element={<Products products={this.state.products}
                                                      onDelete={this.deleteProduct}
                                                      onEdit={this.getProduct}
                                   />}/>
                            <Route path={"*"}
                                   element={<Navigate to={"/products"} replace={true}/>}/>
                        </Routes>
                    </div>
                </main>
            </Router>);
    }


    loadManufacturers = () => {
        EShopService.fetchManufacturers()
            .then((data) => {
                this.setState({
                    manufacturers: data.data
                })
            });
    }

    loadProducts = () => {
        EShopService.fetchProducts()
            .then((data) => {
                this.setState({
                    products: data.data
                })
            });
    }

    loadCategories = () => {
        EShopService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            });
    }

    deleteProduct = (id) => {
        EShopService.deleteProduct(id)
            .then(() => {
                this.loadProducts();
            })
    }

    addProduct = (name, price, quantity, category, manufacturer) => {
        EShopService.addProduct(name, price, quantity, category, manufacturer)
            .then(() => {
                this.loadProducts();
            })
    }

    getProduct = (id) => {
        EShopService.getProduct(id)
            .then((data) => {
                this.setState({
                    selectedProduct: data.data
                })
            })

    }

    editProduct = (id, name, price, quantity, category, manufacturer) => {
        EShopService.editProduct(id, name, price, quantity, category, manufacturer)
            .then(() => this.loadProducts())
    }

    componentDidMount() {
        this.loadManufacturers();
        this.loadProducts();
        this.loadCategories();
    }

}

export default App;
