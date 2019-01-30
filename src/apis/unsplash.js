import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 16f5c0d9703f95795742feb0957fbc8f808708aca8dfa2ab9f6bfdc22698d0a7'
  }
});