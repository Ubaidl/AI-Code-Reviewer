import axios from "axios";

const API_URL = "http://localhost:5000/api/code/";

export const ReviewCode = async ({ language, code }) => {
    try {
        const response = await axios.post(
            `${API_URL}analyze`,
            {
                language,
                code,
            },
            {
                withCredentials: true,
            }
        );

        if (!response.data) {
            throw new Error("No data received from the server");
        }

        return response.data;
        console.log("Backend Response:", response.data);
    } catch (error) {
        console.error("Error during code analyze:", error);
        throw error;
    }
};