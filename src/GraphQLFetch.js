require('dotenv').config();

const API_ENDPOINT =
  process.env.API_SERVER_PORT ||
  'https://queuetacular-api.herokuapp.com/graphql';

export default async function graphQLFetch(query, variables = {}) {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    });
    const body = await response.text();
    const result = JSON.parse(body);

    if (result.errors) {
      const error = result.errors[0];
      if (error.extensions.code === 'BAD_USER_INPUT') {
        const details = error.extensions.exception.errors.join('\n ');
        alert(`${error.message}:\n ${details}`);
      } else {
        alert(`${error.extensions.code}: ${error.message}`);
      }
    }
    console.log(result.data);
    return result.data;
  } catch (e) {
    alert(`Error in sending data to server: ${e.message}`);
    return null;
  }
}
