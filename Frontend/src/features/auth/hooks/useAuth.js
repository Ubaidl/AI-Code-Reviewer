import {useContext} from "react";
import {AuthContext} from "../auth.context";
import { register,Login,logout } from "../services/api.auth";

export const useAuth = ()=>{
    const {user,setUser}= useContext(AuthContext);
   

    const handleregister =  async({username,email,password})=>{
        try{
            const data =await register({username,email,password});
            setUser(data.user);
        }
        catch(error){
            throw error;
        }

    }


    const handlelogin = async ({email,password})=>{
        try{

            const data = await Login({email,password});
            setUser(data.user);
        }
        catch(error){
            throw error;

        }
    }

    const handlelogout = async ()=>{
        try{
            const data = await logout();
        setUser(null);

        }
         catch(error){
            throw error;

    }
        

    }
    return{
        handleregister,handlelogin,handlelogout
    }
   
}