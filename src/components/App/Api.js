import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.nytimes.com/svc/',
    params: {
        'api-key': '191ddbdc768445689dca7f45969bdf14'
    }
});