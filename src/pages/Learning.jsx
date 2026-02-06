import { GoogleGenAI } from "@google/genai";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const ai = new GoogleGenAI({ apiKey });

const Learning = () => {
  const [userRequest, setUserRequest] = useState("");
  const [topic, setTopic] = useState("");
  // I added this state just to display the response on screen
  const [aiResponse, setAiResponse] = useState(null);

  const handleRequest = async () => {
    if (!topic) {
      return console.log("Select topic first");
    }
    if (!userRequest || userRequest.trim() === "") {
      return console.log("type your question");
    }

    localStorage.setItem("topic", JSON.stringify(topic));
    const currentRequest = userRequest.trim();
    setUserRequest("");

    const prompt = `
You are an expert ${topic} educator with 10+ years of teaching experience.
Respond to this user request: "${currentRequest}"
If the user is making casual conversation or greeting, respond naturally and conversationally.
For educational requests, provide a clear, structured response following this exact format:

OUTPUT FORMAT REQUIREMENTS:
- Return ONLY valid JSON with no additional text outside the JSON structure.
- Output must be an array containing exactly 1 object.
- The object MUST strictly follow this schema:

{
  "summary": "A concise 4-word headline summary from user question if question is one or two word use your intellegence and make it 4 word",
  "answer": "Your complete response here following the three-part structure below"
}

RESPONSE RULES:
1. "summary" must always be a short, exactly 4-word headline that give user understand what the question is also you can add ... also .
   Example: "DOM and VDOM in javascript"
2. "answer" must always contain three labeled sections in plain text:

EXPLANATION:
Step-by-step breakdown with simple language, assuming no prior knowledge.

EXAMPLE:
A practical, working example with input/output. Use readable text without markdown.

SUMMARY:
A detailed overview covering:
- What (definition)
- When (use cases)
- Where (context/environment)
- Why (benefits/importance)
- How (key methods/approaches)

FORMATTING RULES:
- Use plain text only (no markdown symbols like **, ##, or \`\`\`).
- Separate sections with clear headings.
- Use line breaks for readability.
- Ensure the response directly answers "${currentRequest}".

Remember: The entire response must strictly follow the JSON schema with both "summary" and "answer".`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });
      let cleanedResponse = response.text
        .replace(/```json\n?/g, "")
        .replace(/```\n?/g, "")
        .trim();

      const aiData = JSON.parse(cleanedResponse);
      const aiItem = Array.isArray(aiData) ? aiData[0] : aiData;

      // Setting response to display in the UI
      setAiResponse(aiItem);
      console.log("this is response", aiItem);
    } catch (error) {
      console.log(error, "Error to connect with AI");
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#02010a] text-white overflow-hidden">
      {/* --- GALAXY BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1b2735_0%,_#090a0f_100%)]"></div>
        {/* Animated Stars */}
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-pulse"></div>
        {/* Glowing Nebula */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        {/* TOP RIGHT SELECTOR */}
        <div className="flex justify-end px-8 py-4">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="relative bg-zinc-900 border border-zinc-800 text-white text-sm rounded-xl px-6 py-2.5 focus:border-purple-500 outline-none transition-all cursor-pointer"
            >
              <option value="" disabled>
                Select Subject
              </option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
              <option value="Python">Python</option>
              <option value="HTML/CSS">HTML/CSS</option>
              <option value="Machine Learning">Machine Learning</option>
              
              
            </select>
          </div>
        </div>

        {/* CHAT / DISPLAY AREA */}
        <main className="flex-1 flex flex-col items-center px-6 py-4 overflow-y-auto">
          {!aiResponse ? (
            <div className="mt-20 text-center animate-pulse">
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500"></h1>
              <p className="text-zinc-500 mt-4 tracking-widest uppercase text-xs">
                must select the subject first...
              </p>
            </div>
          ) : (
            <div className="w-full max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="mb-6">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">
                  Transmission Summary
                </span>
                <h2 className="text-2xl md:text-3xl font-black italic">
                  {aiResponse.summary}
                </h2>
              </div>

              <div className="p-8 rounded-[2rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl leading-relaxed whitespace-pre-wrap text-zinc-300">
                {aiResponse.answer}
              </div>
            </div>
          )}
        </main>

        {/* BOTTOM INPUT DOCK */}
        <div className="p-6 bg-black/40 backdrop-blur-md border-t border-white/5">
          <div className="max-w-4xl mx-auto relative flex items-center gap-3">
            <textarea
              value={userRequest}
              onChange={(e) => setUserRequest(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                !e.shiftKey &&
                (e.preventDefault(), handleRequest())
              }
              placeholder="Ask a technical question to the void..."
              rows={1}
              className="flex-1 bg-zinc-950/50 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:border-purple-500/50 outline-none resize-none transition-all placeholder:text-zinc-600 shadow-inner"
            />
            <button
              onClick={handleRequest}
              className="bg-white text-black h-[52px] px-8 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-purple-600 hover:text-white transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Send
            </button>
          </div>
        </div>

        <Footer />
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
      `,
        }}
      />
    </div>
  );
};

export default Learning;
