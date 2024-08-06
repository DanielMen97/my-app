import { AutoRepositoryImpl } from "../../../node-js/data/repositories/AuthRepository";
import { User } from "../entities/User";

const { register } = new AutoRepositoryImpl();

export const RegisterAuthUseCase = async (user: User) => {
  return await register(user)
}