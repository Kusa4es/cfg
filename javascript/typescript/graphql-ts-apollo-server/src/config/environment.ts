
interface Environment {
  apollo: {
    introspection: boolean;
    playground: boolean;
  };
  port: number
}

export const environment: Environment = {
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === 'true',
    playground: process.env.APOLLO_PLAYGROUND === 'true'
  },
  port: Number(process.env.PORT)
};
