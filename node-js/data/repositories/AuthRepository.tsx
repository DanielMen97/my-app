import { User } from "../../../src/Domain/entities/User";
import { AutoRepository } from '../../../src/Domain/repositories/AuthRepository';
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseApiDelivery } from "../sources/remote/models/ResponseApiDelivery";

export class AutoRepositoryImpl implements AutoRepository {
  async register(user: User) {
      try {
        const response = await ApiDelivery.post<ResponseApiDelivery>('users/create', user);
        return Promise.resolve({ error: undefined, result: response.data})
      } catch (error) {
        let e = (error as Error).message;
        console.log('error: ' + e)
        return Promise.resolve({ success: false, error: e, result: undefined})
      }
  }
}