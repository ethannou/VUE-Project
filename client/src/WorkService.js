import axios from "axios";
const mongoUrl = "http://localhost:4000/api/posts/";

class WorkService {

    //get
    static getWorker(){
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(mongoUrl);
                const Workforce = res.data;
                resolve(
                    Workforce.map((job) => ({
                        ...job,
                    }))
                );
            } catch (err) {
                reject(err);
            }
        });
    }

    //add
    static addWorker(workforce) {
       return axios.post(mongoUrl), {
           workforce,
       }
    }
    //update
    static updateJob(Workforce){
        const updateURL = `${mongoUrl}update/${Workforce._id}`
        return axios.put(updateURL), {
            Workforce,
        }
    }

    //delete
    static deleteJob(Workforce){
        const deleteURL = `${mongoUrl}delete/${Workforce._id}`
        return axios.delete(deleteURL)
    }

}
export default WorkService;