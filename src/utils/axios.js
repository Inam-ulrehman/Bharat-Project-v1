import axios from 'axios'

const customFetchProducts = axios.create({
  baseURL: 'https://course-api.com/react-store-products',
})

export default customFetchProducts
