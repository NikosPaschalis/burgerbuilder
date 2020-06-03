import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://react-my-burger-f4dfd.firebaseio.com/'
});

export default instance;