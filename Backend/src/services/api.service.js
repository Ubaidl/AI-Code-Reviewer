import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const analyzeCode = async (language, code) => {
 const prompt = `
You are an expert software engineer.

Analyze the following ${language} code.

Return ONLY valid JSON.

Do NOT wrap the JSON in markdown.
Do NOT use \`\`\`json.
Do NOT include any explanation before or after the JSON.

{
  "overallReview": "",
  "score": 0,
  "errors": [],
  "suggestions": [],
  "optimizedCode": "",
  "complexity": {
    "time": "",
    "space": ""
  }
}

Code:
${code}
`;

  try {
    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.2,
    });

    const aiResponse = response.choices[0].message.content;

console.log("AI Response:");
console.log(aiResponse);

const cleanedResponse = aiResponse
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

return JSON.parse(cleanedResponse);
  } catch (error) {
    console.error("Error analyzing code:", error);
    throw error;
  }
};