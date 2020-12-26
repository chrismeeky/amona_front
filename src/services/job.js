import axios from "axios";
const BASE_URL = process.env.REACT_APP_baseUrl;
class JobService {
  static async createJob(job) {
    console.log("base url", BASE_URL);
    try {
      return await axios.post(`${BASE_URL}/job/upload`, job);
    } catch (error) {
      return error;
    }
  }

  static async updateJob(permalink, job) {
    console.log("base url", BASE_URL);
    try {
      return await axios.patch(`${BASE_URL}/job/${permalink}`, job);
    } catch (error) {
      return error;
    }
  }static async deleteJob(permalink) {
    console.log("base url", BASE_URL);
    try {
      return await axios.delete(`${BASE_URL}/job/${permalink}`);
    } catch (error) {
      return error;
    }
  }
  static async findAllJobs() {
    try {
      return await axios.get(`${BASE_URL}/jobs`);
    } catch (error) {
      return error;
    }
  }
  static async findJob(permalink) {
    try {
      const job = await axios.get(`${BASE_URL}/job/${permalink}`);
      return job.data;
    } catch (error) {
      return error;
    }
  }
}
export default JobService;
