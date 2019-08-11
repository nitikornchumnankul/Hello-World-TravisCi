
const functions = {
    fetchUser:()=> axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => 'error')
    .console.log(res.data)
  };


module.exports = functions;