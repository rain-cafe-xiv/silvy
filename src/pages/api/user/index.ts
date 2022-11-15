import { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth/next';
import { UserService } from '../../../services/UserService';
import { authOptions } from '../auth/[...nextauth]';
import { ApiModule, moduleToRoute } from '../utils/ApiModule';

export class UserApiModule implements ApiModule {
    async get(req: NextApiRequest, res: NextApiResponse) {
        const session = await unstable_getServerSession(req, res, authOptions);

        if (!session || !session.user) {
            return null;
        }

        return await UserService.getUserByID(session.user.id, true);
    }
}

export const userApiModule = new UserApiModule();

export default moduleToRoute(userApiModule);
