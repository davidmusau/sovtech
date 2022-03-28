import {Character, Context, PageResponse} from "../types";
export  const ServiceResolvers = {
    Query: {
// fetching details of all characters
        characters: async (_: unknown, __: unknown, {dataSources}: Context) => {
            return  await dataSources.characterAPI.getAllPeople().then(
                resp => resp.results.map((item:Character)=>item)
            )
        },

// getting all persons details
        person : async (_:unknown,args:{name:string},{dataSources}: Context)=>{
           return  await dataSources.characterAPI.getByName(args.name).then(
               resp => resp.results.map((item:Character)=>item)
           )
        },

// fetching data from a specific page
        specificPage : async (_:unknown,args:{page:number},{dataSources}: Context)=> {
            return await dataSources.characterAPI.getByPage(args.page).then(
                (receivedData: PageResponse) => receivedData
            )
        }
    }
};
