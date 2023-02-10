import axios from "axios";

//Using 'axios.create({})' creating an instance of Axios and assign to the 'jwtInterceoptor' variable. 
//Now 'jwtIntercoptor' is also an Axios that can be used to invoke the API calls.
const jwtInterceptor = axios.create({});
//Here configuring the 'interceptor' for the 'jwtInterceptor' variable for a response. 
//That means this interceptor gets executed after API returns a response(either a success or an error response).
jwtInterceptor.interceptors.response.use(
    //This method gets executed for success API response. Here we won't change any API flow.
    (response) => {
        return response;
    },
    //This method gets executed for error API response.
    async (error) => {
        //If the error status is '401' that means unauthorized. 
        //then we are going to invoke the refresh token endpoint.
        if (error.response.status === 401) {
            //Invoking the refresh token endpoint.
        await axios
            .get("https://h1.publisher-hub.com/v1/admin/refreshToken", {
            withCredentials: true
            })
            .catch((err) => {
            return Promise.reject(err);
            });
        console.log(error.config);
        //Re-invoking the original API that failed due to the expiration of the access token.
        return axios(error.config);
        } else {
        return Promise.reject(error);
        }
    }
    );
    
export default jwtInterceptor;