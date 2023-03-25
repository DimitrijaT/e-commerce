import React, {Component} from 'react';
import ProductTerm from "../ProductTerm/productTerm";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";


class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 4,
        }
    }

    render() {

        const offset = this.state.size * this.state.page // Големина на страна по на која страна се наоѓаме
        const nextPageOffset = offset + this.state.size // До следната страна на која сме
        const pageCount = Math.ceil(this.props.products.length / this.state.size)
        const products = this.getProductsPage(offset, nextPageOffset)

        return (
            <div className="container my-4">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Category</th>
                        <th scope="col">Manufacturer</th>
                        <th scope="col" className="text-right">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products}
                    </tbody>
                </table>
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <Link className="btn btn-block btn-dark" to="/products/add">
                            Add New Product
                        </Link>
                    </div>

                    <ReactPaginate
                        previousLabel={<i className="fas fa-chevron-left">back</i>}
                        nextLabel={<i className="fas fa-chevron-right">next</i>}
                        breakLabel={<a href="/#" className="page-link">...</a>}
                        breakClassName={"break-me"}
                        pageClassName={"ml-1 page-item"}
                        pageCount={pageCount} // Колку страници се
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick} // Функција ни треба to handle change
                        containerClassName={"pagination m-4 justify-content-center"}
                        activeClassName={"active"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        nextClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextLinkClassName={"page-link"}
                    />
                    {/*<ReactPaginate previousLabel={"back"}*/}
                    {/*               nextLabel={"next"}*/}
                    {/*               breakLabel={<a href="/#">...</a>}*/}
                    {/*               breakClassName={"break-me"}*/}
                    {/*               pageClassName={"ml-1"}*/}
                    {/*               pageCount={pageCount} // Колку страници се*/}
                    {/*               marginPagesDisplayed={2}*/}
                    {/*               pageRangeDisplayed={5}*/}
                    {/*               onPageChange={this.handlePageClick} // Функција ни треба to handle change*/}
                    {/*               containerClassName={"pagination m-4 justify-content-center"}*/}
                    {/*               activeClassName={"active"}/>*/}
                </div>
            </div>
        );
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({
            page: selected
        })
    }

    // Треба да се повика при рендерирање на продуктите
    // Прима offset и nextPageOffset за да се направи соодветно филтрирање
    getProductsPage = (offset, nextPageOffset) => {
        return this.props.products.map((term) => {
            return (
                <ProductTerm term={term} onDelete={this.props.onDelete} onEdit={this.props.onEdit}/>
            );
        }).filter((product, index) => {
            return index >= offset && index < nextPageOffset;
        })

    }
}

// const products = (props) => {
//     return (
//         <div className={"container mm-4 mt-5"}>
//             <div className={"row"}>
//                 <div className={"row"}>
//                     <table className={"table table-striped"}>
//                         <thead>
//                         <tr>
//                             <th scope={"col"}>Name</th>
//                             <th scope={"col"}>Price</th>
//                             <th scope={"col"}>Quantity</th>
//                             <th scope={"col"}>Category</th>
//                             <th scope={"col"}>Manufacturer</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {props.products.map((term) => {
//                             return (
//                                 <ProductTerm term={term} onDelete={props.onDelete} onEdit={props.onEdit}></ProductTerm>
//                             )
//                         })}
//                         </tbody>
//                     </table>
//                 </div>
//                 <div className="col mb-3">
//                     <div className="row">
//                         <div className="col-sm-12 col-md-12">
//                             <Link className={"btn btn-block btn-dark"} to={"/products/add"}>Add new product</Link>
//                         </div>
//                     </div>
//                 </div>
//
//             </div>
//         </div>
//     );
// }

export default Products;