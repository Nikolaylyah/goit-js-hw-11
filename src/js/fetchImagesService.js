import axios from 'axios';
import { variables } from './variables';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '29970026-ac3fe5699883ebc097e04e8ad';
axios.defaults.baseURL = BASE_URL;

const fetchImages = async input => {
    const queryParams = new URLSearchParams({
        key: API_KEY,
        q: input,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: variables.limit,
        page: variables.page,
    });

    const { data } = await axios.get('?' + queryParams.toString());
    return data;
};

export default fetchImages;