
import axios from 'axios';


async function RestImageAPI(name, page, perPage) {
  const baseURL = 'https://pixabay.com/api/';
  const key = '28545152-94e55978d3ea380a963d011b7';

  try {
    const response = await axios.get(
      `${baseURL}?key=${key}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    );
    return response.data;
  } catch (error) {
    console.log('ERROR: ' + error);
  }
}

export { RestImageAPI };