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
            const res = await axios.post(url,data);
            let result = res.data;
            return result;
        }
        catch(e){
            const message = e;
            return message;
        }
    }
}

export default AxiosService;