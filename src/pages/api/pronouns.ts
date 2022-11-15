import { PronounsService } from '../../services/PronounsService';
import { ApiModule, moduleToRoute } from './utils/ApiModule';

export class PronounsApiModule implements ApiModule {
    async get() {
        return PronounsService.getPronounsList();
    }
}

export const pronounsApiModule = new PronounsApiModule();

export default moduleToRoute(pronounsApiModule);
