import axios from 'axios'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: 'AIzaSyD8QAVBd3J90-ApSFICQTniyhe87lUyhL4',
    }
})



