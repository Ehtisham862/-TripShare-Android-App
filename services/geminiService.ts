
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getSmartItinerary = async (destination: string, days: number) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Create a ${days}-day travel itinerary for ${destination}. 
      Include 3-4 activities per day. Format the response as a clear, list-based markdown.`,
      config: {
        systemInstruction: "You are a professional travel planner specializing in efficient group trips.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Could not generate itinerary. Please check your connection.";
  }
};

export const summarizeExpenses = async (expenses: any[], participants: string[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Summarize the following expenses and provide a brief settlement advice. 
      Expenses: ${JSON.stringify(expenses)}. 
      Participants: ${participants.join(", ")}.`,
    });
    return response.text;
  } catch (error) {
    return "Unable to summarize expenses at this time.";
  }
};
