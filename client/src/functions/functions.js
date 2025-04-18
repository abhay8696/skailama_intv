import axios from "axios"
let token = JSON.parse(localStorage.getItem("userData"))?.token?.access?.token

export const getAllProjects = async () => {
    console.log("getting all projects from db")
    const response = await axios.get("https://server-skailama-intv.vercel.app/api/project/all",  {
        headers: {
        Authorization: `Bearer ${token}`
    }})

    console.log(response.data)
    if(response.status === 200) return response.data;
    else throw new Error("Internal Server Error");
    
}

export const createProject = async (payload) => {
    let response = await axios.post('https://server-skailama-intv.vercel.app/api/project/new', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json' // optional; axios sets this automatically for JSON
        }
    })

    if(response.status === 201) return response;
    else throw new Error("Internal Server Error");
}

export const formatDate = (dateString) => {
    const date = new Date(dateString);
  
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
  
    // Format to: "18 April 2025"
    return date.toLocaleDateString('en-GB', options);
  }
  
export const generateShortCode = (input) => {
    if (!input) return '';
  
    const words = input.trim().split(/\s+/);
  
    if (words.length >= 2) {
      // Take first letter of first two words
      return (
        words[0][0].toUpperCase() + words[1][0].toUpperCase()
      );
    } else if (words[0].length > 1) {
      // Single word, return first letter
      return words[0][0].toUpperCase();
    } else {
      // Single character
      return words[0].toUpperCase();
    }
}

export const getProjectById = async projectId => {
    console.log("getting all podcasts in this project")
    let response = await axios.get(`https://server-skailama-intv.vercel.app/api/project/${projectId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json' // optional; axios sets this automatically for JSON
        }
    })
    console.log(response.data.project)
    if(response.status === 200) return response.data.project;
    else throw new Error("Internal Server Error");
}

export const createNewPodcast = async (projectId, payload) => {
    let response = await axios.post('https://server-skailama-intv.vercel.app/api/podcast/new', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json' // optional; axios sets this automatically for JSON
        }
    })
    console.log(response)
    if(response.status === 201) return response;
    else throw new Error("Internal Server Error");
}