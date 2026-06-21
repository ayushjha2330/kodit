const PROVIDERS = [
  {
    name: "openai",
    key: () => process.env.OPENAI_API_KEY,
    url: "https://api.openai.com/v1/chat/completions",
    model: "gpt-4o-mini",
    headers: (key) => ({
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    }),
    transformBody: (messages, systemPrompt) => ({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages,
      ],
      max_tokens: 300,
      temperature: 0.5,
    }),
    parseResponse: async (res) => {
      const data = await res.json();
      return data.choices?.[0]?.message?.content;
    },
  },
  {
    name: "openrouter",
    key: () => process.env.OPENROUTER_API_KEY,
    url: "https://openrouter.ai/api/v1/chat/completions",
    model: "openai/gpt-4o-mini",
    headers: (key) => ({
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
      "HTTP-Referer": "https://kodit.agency",
      "X-Title": "KODIT Agency Chat",
    }),
    transformBody: (messages, systemPrompt) => ({
      model: "openai/gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages,
      ],
      max_tokens: 300,
      temperature: 0.5,
    }),
    parseResponse: async (res) => {
      const data = await res.json();
      return data.choices?.[0]?.message?.content;
    },
  },
  {
    name: "groq",
    key: () => process.env.GROQ_API_KEY,
    url: "https://api.groq.com/openai/v1/chat/completions",
    model: "llama-3.3-70b-versatile",
    headers: (key) => ({
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    }),
    transformBody: (messages, systemPrompt) => ({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages,
      ],
      max_tokens: 300,
      temperature: 0.5,
    }),
    parseResponse: async (res) => {
      const data = await res.json();
      return data.choices?.[0]?.message?.content;
    },
  },
  {
    name: "gemini",
    key: () => process.env.GEMINI_API_KEY,
    url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
    model: "gemini-2.0-flash",
    headers: (key) => ({
      "Content-Type": "application/json",
      "x-goog-api-key": key,
    }),
    transformBody: (messages, systemPrompt) => {
      const contents = [{ role: "user", parts: [{ text: systemPrompt }] }];
      for (const msg of messages) {
        const role = msg.role === "assistant" ? "model" : "user";
        contents.push({ role, parts: [{ text: msg.content }] });
      }
      return { contents };
    },
    parseResponse: async (res) => {
      const data = await res.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text;
    },
  },
];

export async function chatWithFallback(messages, systemPrompt) {
  const errors = [];

  for (const provider of PROVIDERS) {
    const apiKey = provider.key();
    if (!apiKey) {
      errors.push(`${provider.name}: API key not configured`);
      console.log(`[Chat API] ${provider.name} skipped: API key not configured`);
      continue;
    }

    try {
      console.log(`[Chat API] Trying provider: ${provider.name}...`);
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);

      const res = await fetch(provider.url, {
        method: "POST",
        headers: provider.headers(apiKey),
        body: JSON.stringify(provider.transformBody(messages, systemPrompt)),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!res.ok) {
        const errBody = await res.text();
        const errMsg = `${provider.name}: HTTP ${res.status} - ${errBody.slice(0, 200)}`;
        errors.push(errMsg);
        console.error(`[Chat API] ${provider.name} failed:`, errMsg);
        continue;
      }

      const reply = await provider.parseResponse(res);
      if (reply) {
        console.log(`[Chat API] Successfully got reply from ${provider.name}`);
        return reply;
      }

      errors.push(`${provider.name}: empty response`);
      console.error(`[Chat API] ${provider.name} returned empty response`);
    } catch (err) {
      errors.push(`${provider.name}: ${err.message}`);
      console.error(`[Chat API] ${provider.name} error:`, err.message);
    }
  }

  throw new Error(`All providers failed:\n${errors.join("\n")}`);
}
