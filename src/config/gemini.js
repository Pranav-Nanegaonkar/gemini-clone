const apikey = "AIzaSyDgHEoKCr2JpQh_ji7L2dkRNTXpryAY5BU";
import dotenv from "dotenv";
dotenv.config();
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function runChat(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  // console.log(response.text);
  return response.text;
}

export default runChat;
