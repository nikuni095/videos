import axios from 'axios'
const KEY='AIzaSyBF-GblGwOvcp3xZn-FWPGT8Q-PHYCLHqQ'

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params: {
        part:'snippet',
        maxResults:5,
        key:KEY,
    }


});