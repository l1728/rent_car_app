import axios from "axios";

export const getCatalog = async (page = 1) => {
    const response = await axios.get(
        ` https://6675ca1aa8d2b4d072f17795.mockapi.io/advert?page=${page}&limit=12`
    );
    return response.data;
};

export const getAllCars = async () => {
    const response = await axios.get(
        `https://6675ca1aa8d2b4d072f17795.mockapi.io/advert`
    );

    return response.data;
};