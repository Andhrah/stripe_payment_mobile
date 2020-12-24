import axios from 'axios';

export const purchase = async (amount, tokenId, accessToken) => {
  const body = {
    amount: amount,
    tokenId: tokenId,
  };
  const headers = {
    'Content-Type': 'application/json',
  };
  try {
    console.log(body);
    const { data } = await axios.post(' https://939802325b9d.ngrok.io/api/purchase/', body, { headers });
    return data;
  }
  catch (error) {
    console.log(error);
    return Promise.reject('Error in making payment', error);
  }
};
