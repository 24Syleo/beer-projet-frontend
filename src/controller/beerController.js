import AxiosService from '../service/AxiosService.js';
import { hote } from '../config/config.js';

class BeerController {

    static urlBeer = hote + 'beer/'

    //Liste de bieres
    static async getBeers() {
        try {
            const res = await AxiosService.getAxiosService(BeerController.urlBeer);
            return res.data;
        } catch (e) {
            console.log('controller', e);
            return e;
        }
    }

    //creer une biere
    static async createBeer(beerData){
        try{
            console.log(beerData);
            const beer = await AxiosService.postAxiosService(BeerController.urlBeer,beerData);
            console.log(beer);
            return beer;
        }
        catch(e){
            console.error('post controller error', e);
            return e;
        }
    }

    //supprimer une biere
    static async deleteBeer(beerId){
        try{
            let url = BeerController.urlBeer + beerId
            const res = await AxiosService.deleteAxiosService(url);
            return res;
        }
        catch(error){
            const message = error;
            return message
        }
    }
}

export default BeerController;