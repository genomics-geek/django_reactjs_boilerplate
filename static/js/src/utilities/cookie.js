import cookies from 'react-cookie';


// This is the place where we can load elements from a cookie to be used in our app

// Django CRSF Token is stored in a cookie
const csrftoken = cookies.load('csrftoken');

// JWT is going to be saved into cookie
// cookies.save('jwt', response.data.token, { secure: true, httpOnly: true });
// Therefore it will automatically be sent in the header of all API requests
// JWT will NOT be accessible to JavaScript because it is httpOnly :)

export { csrftoken };
