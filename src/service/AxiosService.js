import axios from "axios";

class AxiosService {

    //requete get axios vers l api
    static async getAxiosService(url) {
        try {
            const res = await axios.get(url);
            return res;
        } catch (e) {
            return e.message;
        }
    }

    //requete post axios vers l'api
    static async postAxiosService(url, data){
        try{
            console.log('post allez', url, data)
            const res = await axios.post(url,data);
            let result = res.data;
            console.log('post retour', result);
            return result;
        }
        catch(e){
            console.log('erreur post', e);
            const message = e;
            return message;
        }
    }
}

export default AxiosService;