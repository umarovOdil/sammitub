import Axios from 'axios'

const URL_YOUTUBE = 'https://youtube-v31.p.rapidapi.com'

const REACT_APP_KEY = process.env.REACT_APP_PUBLIC_KEY;

const options = {
    method: 'GET',
    url: URL_YOUTUBE,
    params: {
      maxResults: '48'
    },
    headers: {
      'X-RapidAPI-Key': REACT_APP_KEY.toString(),
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const ApiService = {
    async fetching(url){

        const respons = await Axios.get(`${URL_YOUTUBE}/${url}` , options)
        return respons.data
    }
}