import axios from 'axios';

export const axiosWithAuth = async () => {
   let token;
   try {
      await axios({
         method: 'post',
         url: 'https://dev-9qtopu1h.auth0.com/oauth/token',
         headers: {
            'content-type': 'application/json'
         },
         data: {
            client_id: 'fHa42S96HkYM79Ig01A6tXdkgi7LHCUT',
            client_secret:
               'pl9D05xNk37Clu238_nH5dh0ulk9oTThQ24JLGP5AC3uC5fThfNjZdogkXj9CEfG-bciH-JwceuokZaxNkJMx_edh',
            audience: 'https://hackathon-portal-labs-19.herokuapp.com/',
            grant_type: 'client_credentials'
         }
      })
         .then(res => (token = res.data.access_token))
         .catch(err => console.log(err));
   } catch (err) {
      console.log(err);
   } finally {
      return axios.create({
         baseURL: 'https://hackathon-portal-labs-19.herokuapp.com/api',
         // baseURL: 'http://localhost:5000/api',
         headers: {
            Authorization: `Bearer ${token}`
         }
      });
   }
};
