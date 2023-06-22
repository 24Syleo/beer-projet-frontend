import axios from "axios";

class AxiosService {

    //requete get axios vers l api
    static async getAxiosService(url) {
        try {
            const res = await axios.get(url);
            console.log('axios', res);
            return (res);
        } catch (e) {
            console.log('axios', e);
            return (e);
        }
    }
}

export default AxiosService;