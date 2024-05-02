import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'bc5d756f6bd946378a1f7c836ba8eca3'
    }
})

