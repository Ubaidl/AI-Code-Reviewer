import axios from "axios";
const API_URL = "http://localhost:5000/api/auth/";                

export const register = async ({username,email,password})=>{
    console.log(username, email, password);
    try{
        const response = await axios.post (`${API_URL}register`,
             {
                username,
                email,
                password

             },
             {withCredentials: true},
        );
    if(!response.data){
        throw new Error("No data received from the server");

    }
    return response.data;
    }
    catch(error){
        console.error("Error during registration:",error);
        throw error;
    }


};

export const Login = async ({email,password})=>{
     console.log(email, password);
    try{
        const response = await axios.post (`${API_URL}login`,
             {
                email,
                password
             },
             {withCredentials: true}
        );
        if(!response.data){
            throw new Error("No data received from the server");

        }
        return response.data;
        
    }
    catch(error){
         console.log(error.response?.data);
        console.error("Error during login:",error);
        throw error;
    }
};

export const logout = async ()=>{
    try{
        const response = await axios.get(`${API_URL}logout`, {withCredentials: true});
        if(!response.data){
            throw new Error("No data received from the server");

        }
        return response.data;

    }
    catch(error){
        console.error("Error during logout:",error);
        throw error;
    }
}