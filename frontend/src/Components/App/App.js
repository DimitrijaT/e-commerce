import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Manufacturers from "../Manufacturers/manufacturers";
import EShopService from "../../repository/eshopRepository";
import Products from "../Products/ProductList/products";
import Categories from "../Categories/categories";
import Header from "../Header/header";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            manufacturers: [],
            products: [],
            categories: []
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
                            <Route path={"/manufacturers"} element={<Manufacturers manufacturers={this.state.manufacturers}/>}/>
                            <Route path={"/products"} element={<Products products={this.state.products}/>}/>
                            <Route path={"/categories"} element={<Categories categories={this.state.categories}/>}/>
                            <Route path={"*"} element={<Navigate to={"/products"} replace={true}/>}/>
                        </Routes>
                    </div>
                </main>
            </Router>
        );
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

    componentDidMount() {
        this.loadManufacturers();
        this.loadProducts();
        this.loadCategories();
    }

}

export default App;
