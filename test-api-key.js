// Test Gemini 2.5 Flash API with system instruction
const apiKey = "AIzaSyALxtvf2w_-DO6gHsk-pM3LkGd9ZbuVeaw";

async function testModel() {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent`;
  
  const payload = {
    contents: [
      {
        role: "user",
        parts: [
          {
            text: "What is PulseChat?"
          }
        ]
      }
    ],
    systemInstruction: {
      parts: [{
        text: `You are a concise and helpful Sales Assistant for PulseChat - an AI marketing automation tool for WhatsApp & Telegram.

Your role: Answer questions about PulseChat and guide users toward trying it.

Key Points:
- Automates WhatsApp & Telegram marketing 24/7
- AI generates perfect product pitches
- Real-time analytics

Guidelines:
1. Keep responses SHORT (max 100 words)
2. Be friendly and conversational
3. Suggest reaching out on WhatsApp or Telegram for demos`
      }]
    }
  };

  try {
    console.log("🔍 Testing gemini-2.5-flash with system instruction...\n");
    
    const response = await fetch(`${url}?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    });

    console.log(`Status Code: ${response.status}`);
    const responseData = await response.json();
    
    if (response.status === 200) {
      console.log("✅ SUCCESS!\n");
      const content = responseData.candidates?.[0]?.content?.parts?.[0];
      if (content && content.text) {
        console.log("🤖 AI Response:");
        console.log(content.text);
      }
    } else if (response.status === 429) {
      console.log("❌ RATE LIMIT (429)");
      console.log(responseData.error?.message);
    } else {
      console.log("❌ Error:");
      console.log(JSON.stringify(responseData.error, null, 2));
    }

  } catch (error) {
    console.error("❌ Connection error:", error.message);
  }
}

testModel();
