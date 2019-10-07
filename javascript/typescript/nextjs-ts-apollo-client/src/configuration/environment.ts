
interface Environment {
  port: number
}

export const environment: Environment = {
  port: Number(process.env.PORT)
};
