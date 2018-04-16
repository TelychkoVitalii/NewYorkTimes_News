import axios from 'axios';

const apiKey = "191ddbdc768445689dca7f45969bdf14";

export const fetchTopic = (section) => {
    return axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?`, {
        params: { 'api-key': apiKey }
    })
};
