import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer Tg87LiLneDAIK1eNooKGWzj9dx3-MayuIz1r9yDidP3nQlUBqjByQzaK4gRzAdLUQ14vprOwhAfR1gFNeP4DISAzzCv4IFQM9v_VcPbOeDj-aet0o5MXoiWs3pLZX3Yx'
  }
})