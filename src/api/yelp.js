import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer eDJnSYyNGZN7F-zCIbbnTF0faiUkJBRR-NToFoaw0WfSGURxbrZ6hqpXI7q0tbVVlY7Fma8ruaXU9-hAJgEo3Rkg4x2CkOfP4qXPtD2Wt2Wtw9lVTtX3XpZkcJHZX3Yx'
  }
})