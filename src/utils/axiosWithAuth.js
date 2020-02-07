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
            client_id: 'K9A2vsSCFuYCZrBKZp266qLvq9UqObHM',
            client_secret:
               'DNZDTXytEGaDodFa9OzfkMhyWvHcqDRSvxx8fTROTeoXsTUzPDrzAAW7vweZXS7w-bciH-JwceuokZaxNkJMx_edh',
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
