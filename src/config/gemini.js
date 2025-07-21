const apikey = 'AIzaSyDgHEoKCr2JpQh_ji7L2dkRNTXpryAY5BU'


import {GoogleGenAI} from '@google/genai';
const GEMINI_API_KEY = 'AIzaSyDgHEoKCr2JpQh_ji7L2dkRNTXpryAY5BU'

const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

async function runChat(prompt) {
  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash-001',
    contents: prompt,
  });
  console.log(response.text);
  return response.text;
}

export default runChat;