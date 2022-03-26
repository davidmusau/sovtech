import {Character, Context} from "../types";


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
        }

    }

};