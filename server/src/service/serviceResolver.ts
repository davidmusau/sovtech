import {Character, Context, SearchInput} from "../types";


export  const ServiceResolvers = {
    Query: {
        hello: () => 'Hello world!',
        getAllPeople: async (_: unknown,
                             __: unknown,
                             {dataSources}: Context) => {
            const res = await dataSources.characterAPI.getAllPeople();
            return res.results.map((item:Character) => ({
                name: item.name, height: item.height, mass: item.mass,
                gender: item.gender, homeworld: item.homeworld,
            }));
        },
        getPersonDetails : async (_:unknown,args:{name:string},{dataSources}: Context)=>{
            let res = await dataSources.characterAPI.getByName(args.name);
            return res.results.map((item:Character) => ({
                name: item.name, height: item.height, mass: item.mass,
                gender: item.gender, homeworld: item.homeworld,
            }))
        },
        getAllOnSpecificPage : async (_:unknown,args:{page:number},{dataSources}: Context)=>{
            let res = await dataSources.characterAPI.getByPage(args.page);
            return res.results.map((item:Character) => ({
                name: item.name, height: item.height, mass: item.mass,
                gender: item.gender, homeworld: item.homeworld,
            }))
        }
    }
};