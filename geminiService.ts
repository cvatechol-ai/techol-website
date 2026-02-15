
import { GoogleGenAI, Type } from "@google/genai";

export async function generateProjectConsultation(prompt: string) {
  // Always use process.env.API_KEY directly.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    // Using gemini-3-pro-preview for complex reasoning and roadmap generation.
    model: "gemini-3-pro-preview",
    contents: `Acting as a professional tech consultant from TechOl Studio, provide a detailed project roadmap, technology suggestions, and estimated timeline for the following client request: "${prompt}". 
    Format the response as a structured JSON object with sections: 'summary', 'techStack' (array), 'phases' (array of {title, tasks}), and 'estimatedTimeline'.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          summary: { type: Type.STRING },
          techStack: { 
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          phases: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                tasks: { 
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
                }
              },
              required: ['title', 'tasks']
            }
          },
          estimatedTimeline: { type: Type.STRING }
        },
        required: ['summary', 'techStack', 'phases', 'estimatedTimeline']
      }
    }
  });

  // response.text is a property, not a method.
  return JSON.parse(response.text || "{}");
}
