import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fethUser = async (dataUser) => await fetch('https://connections-api.herokuapp.com/users/signup', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(dataUser)

}).then((response) => {
       console.log('dataUser', dataUser)
        return response.json();
})
    
// .then((data) => {
//          console.log(data)
//         return data;
// });
