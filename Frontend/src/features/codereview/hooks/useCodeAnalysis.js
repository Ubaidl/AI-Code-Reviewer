import { useContext } from "react";
import { Codecontext } from "../codeanalyzer.context";
import { ReviewCode } from "../services/api.service";

export const useCodeReview = () => {
    const context = useContext(Codecontext);

    const { analysis, setanalysis } = context;

    const handleCodeReview = async ({ language, code }) => {
        try {
            const response= await ReviewCode({
                language,
                code,
            });
            console.log("Received:", response);

            setanalysis(response.data);
            console.log("Analysis saved");
        } catch (error) {
            throw error;
        }
    };

    return {
        handleCodeReview,
    };
};