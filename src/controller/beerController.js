import AxiosService from '../service/AxiosService.js';

class BeerController {

    static urlBeer = 'http://localhost:3100/beer';

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
}

export default BeerController;