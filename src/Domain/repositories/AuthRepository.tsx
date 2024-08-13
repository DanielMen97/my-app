import { ResponseApiDelivery } from "../../../node-js/data/sources/remote/models/ResponseApiDelivery";
import { User } from "../entities/User";

export interface AutoRepository {
  register(user: User): Promise<ResponseApiDelivery>;
}

