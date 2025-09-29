import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '04616931eef44a4d91f02cf2d4d9aad5'
    }
})