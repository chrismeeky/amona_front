import axios from "axios";
const BASE_URL = process.env.REACT_APP_baseUrl;
class SettingsService {
  static async create(path, data) {
    try {
      return await axios.post(`${BASE_URL}/${path}`, data);
    } catch (error) {
      return error;
    }
  }

  static async update(path, data) {
    try {
      return await axios.patch(`${BASE_URL}/${path}`, data);
    } catch (error) {
      return error;
    }
  }
  static async delete(path) {
    try {
      return await axios.delete(`${BASE_URL}/${path}`);
    } catch (error) {
      return error;
    }
  }
  static async findAll(path) {
    try {
      return await axios.get(`${BASE_URL}/${path}`);
    } catch (error) {
      return error;
    }
  }
  static async findOne(path) {
    try {
      const job = await axios.get(`${BASE_URL}/${path}`);
      return job.data;
    } catch (error) {
      return error;
    }
  }
}
export default SettingsService;
