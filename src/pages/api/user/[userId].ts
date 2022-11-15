import { NextApiRequest } from 'next';
import { UserService } from '../../../services/UserService';
import { ApiModule, moduleToRoute } from '../utils/ApiModule';

export class UserApiModule implements ApiModule {
    async get(req: NextApiRequest) {
        const userId = req.query.userId as string;

        return await UserService.getUserByID(userId);
    }
}

export const userApiModule = new UserApiModule();

export default moduleToRoute(userApiModule);
