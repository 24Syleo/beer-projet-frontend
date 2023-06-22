import 'dotenv/config';
import AxiosService from '../service/AxiosService.js';

class BeerController {

    _url;

    constructor() {
        this._url = process.env.URL;
    }

    //Liste de bieres
    static async getBeers() {
        try {
            const res = await AxiosService.getAxiosService(this._url);
            console.log(res);
            return (res);
        } catch (e) {
            console.error(e);
            return e;
        }
    }
}

export default BeerController;