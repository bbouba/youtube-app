import axios from 'axios';

const KEY = 'AIzaSyAx0tu0F0ZS5rUsUOUBLN3O6NVqvU2j3TE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})