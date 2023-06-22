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
}

export default AxiosService;