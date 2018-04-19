import axios from 'axios';

const apiKey = "191ddbdc768445689dca7f45969bdf14",
      url = 'https://api.nytimes.com/svc';

export const fetchTopic = (section) => {
    return axios.get(`${url}/topstories/v2/${section}.json?`, {
        params: { 'api-key': apiKey }
    })
};

export const fetchArticles = (term) => {
    return axios.get(`${url}/search/v2/articlesearch.json?`, {
        params: { 'api-key': apiKey, 'q': term }
    })
};