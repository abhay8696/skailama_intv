import axios from "axios"
let token = JSON.parse(localStorage.getItem("userData"))?.token?.access?.token

export const getAllProjects = async () => {
    const response = await axios.get("https://server-skailama-intv.vercel.app/api/project/all",  {
        headers: {
        Authorization: `Bearer ${token}`
    }})

    if(response.status === 200) return response.data;
    else throw new Error("Internal Server Error");
    
}
