import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer DC2f1Gb2y04qZBP2yLHlqvS6_GEJxBDiuXElOzb4C7E-VujEMpCK3oGhLEOgQOEPSvVmYlGeHxjCKS-B-whBCXpHNsopgRuqQDSgXzZH24M5HSdmpumWdc7RY-0HX3Yx'
  }
})