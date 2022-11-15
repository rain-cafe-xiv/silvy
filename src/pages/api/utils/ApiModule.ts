import { NextApiRequest, NextApiResponse } from 'next';
import { SilvyApiError } from '../../../errors/SilvyApiError';

export interface ApiModule {
    get(req: NextApiRequest, res: NextApiResponse): any | Promise<any>;
}

export function moduleToRoute(module: ApiModule) {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const method = req.method.toLowerCase();

            const fn = module[method];

            if (!fn) {
                throw new SilvyApiError({
                    message: `Method ${method} Not Allowed`,
                    code: 'invalid_method',
                    status: 405
                });
            }

            res.send(await fn(req, res));
        } catch (error) {
            console.error(error);
            res.status(error.status || 500).send(error);
        }
    }
}