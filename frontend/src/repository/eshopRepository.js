import axios from '../custom-axios/axios'

const EShopService = {
    fetchManufacturers: () => {
        return axios.get("/manufacturers");
    },
    fetchProducts: () => {
        return axios.get("/products");
    },
    fetchCategories: () => {
        return axios.get("/categories");
    }
}

export default EShopService;