export async function fetchData(url, method = 'GET', _body) {
  const requestOptions = {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    // body: body && JSON.stringify(body),
  };

  try {
    const response = await fetch(url, requestOptions);
    return await response.json();
  } catch (error) {
    console.log('Error occurred', error);
    throw error;
  }
}
