import axios from 'axios';

async function getAllProdutos() {
  try {
    const response = await axios.get('http://localhost:3000/produtos');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getAllProdutos();