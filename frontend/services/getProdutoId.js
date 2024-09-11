import axios from 'axios';

async function getProdutoId(id) {
  try {
    const response = await axios.get(`http://localhost:3000/produtos/${id}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getProdutoId(2);