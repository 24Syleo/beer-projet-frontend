import AxiosService from '../service/AxiosService.js';
import { hote } from '../config/config.js';

class IngController{

    static urlIng = hote + 'ingredient/';

    //listes des ingredients
    static async getIngredients(){
        try {
            const res = await AxiosService.getAxiosService(IngController.urlIng);
            return res.data;
        } catch (e) {
            return e;
        }
    }
}

export default IngController;