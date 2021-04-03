import axios from 'axios';

export async function getPlayerDatas() {
  const response = await axios.get('http://localhost:3000/player');
  return response;
}