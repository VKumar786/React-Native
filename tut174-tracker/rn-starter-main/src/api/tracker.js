import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
  baseURL: "https://c1df-2405-201-6815-17b-4652-b64d-367c-13a7.ngrok-free.app",
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("authToken");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
