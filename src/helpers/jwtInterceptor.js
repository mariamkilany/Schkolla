import axios from "axios";

const jwtInterceoptor = axios.create({});

jwtInterceoptor.interceptors.request.use((config) => {
    // console.log(config)
    let tokensData = localStorage.getItem("accessToken");
    // config.headers["withCredentials"]=true;
    config.headers["Authorization"] = `Bearer ${tokensData}`;
    return config;
});

jwtInterceoptor.interceptors.response.use(
    (response) => {
    return response;
    },
    async (error) => {
        // console.log(error)
    if (error.response.status === 401) {
        let apiResponse = await axios.get("https://h1.publisher-hub.com/v1/admin/refreshToken",{withCredentials:true})
        localStorage.setItem("accessToken", apiResponse.data.accessToken);
        error.config.headers["Authorization"] = `Bearer ${apiResponse.data.accessToken}`;
        return axios(error.config);
    } else {
        return Promise.reject(error);
    }
}
);

export default jwtInterceoptor;