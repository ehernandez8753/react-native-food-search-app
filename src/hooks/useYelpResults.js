import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (searchTermVal) => {
    try{
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          location: 'Salt Lake City, UT.',
          radius: 30000,
          term: searchTermVal,
        }
      })
      setResults(response.data.businesses)
      setErrorMessage('')
    } catch (err) {
      setErrorMessage('Something went wrong during your request')
    }
  }

  useEffect(() => {
    searchApi('Pasta')
  }, [])

  return [searchApi, results, errorMessage]
}