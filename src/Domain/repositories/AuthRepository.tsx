import { User } from "../entities/User";

export interface AutoRepository {
  register(user: User): Promise<any>;
}

