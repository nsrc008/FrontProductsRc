import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://backproductsdj.onrender.com/api/", // Cambia esto a tu URL de la API
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
