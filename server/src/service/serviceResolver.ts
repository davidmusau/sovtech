import axios from "axios";

const BASE_URL = 'https://swapi.dev/';

export  const ServiceResolvers = {
    Query: {
        getAllPeople: async ()=>{
            const response = await axios.get(`${BASE_URL}people`)
                console.log(response)
        },
        hello: () => 'Hello world!',
    },
};