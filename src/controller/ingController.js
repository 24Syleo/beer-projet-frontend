import AxiosService from '../service/AxiosService.js';

class IngController{

    static urlIng = 'http://localhost:3100/ingredient';

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