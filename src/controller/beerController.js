import AxiosService from '../service/AxiosService.js';

class BeerController {

    static urlBeer = 'http://localhost:3100/beer';

    //Liste de bieres
    static async getBeers() {
        try {
            const res = await AxiosService.getAxiosService(BeerController.urlBeer);
            console.log(res.data);
            return res.data;
        } catch (e) {
            console.log('controller', e);
            return e;
        }
    }
}

export default BeerController;