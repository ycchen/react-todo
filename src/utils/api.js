
const apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'

export async function callApi(url = apiUrl, method = 'GET', data = null) {
  const res = await fetch(url , {
    method,
    headers: {
      Accept: 'application/json'
    },
    body: JSON.stringify(data)
  })
  return await res.json()
}

// const api = (auth, uri, method = 'GET', data = null) => {
//   if (!(auth && auth.apiToken && auth.apiToken.token)) {
//     // console.log('Invalid Token');
//     throw new InvalidToken('Authorization token is invalid or expired');
//   }

//   const fullURI = `${Config().apiBase}${uri}`;
//   const url = `${Config().apiHost}${fullURI}`;
//   const instance = axios.create({
//     headers: signHeaders({
//       method,
//       data,
//       uri: fullURI,
//       secretKey: auth.apiToken.token,
//       id: auth.user.id
//     }),
//     timeout: 60000
//   });

//   switch (method.toUpperCase()) {
//     case 'GET':
//       return instance.get(url);
//     case 'PUT':
//       return instance.put(url, data);
//     case 'PATCH':
//       return instance.patch(url, data);
//     case 'POST':
//       return instance.post(url, data);
//     case 'DELETE':
//       return instance.delete(url);
//     default:
//       throw new InvalidMethod(`Invalid method: ${method.toUpperCase()}`);
//   }
// };