const axios = require('axios');

const GEMINI_KEY = 'AIzaSyDe3dOR7xy5yd_GkMebe2pxjtpZ_GsbYBI';
const API_URL = https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_KEY};

async function askLayla(prompt) {
  const body = {
    contents: [{ role: 'user', parts: [{ text: prompt }] }]
  };

  try {
    const res = await axios.post(API_URL, body);
    const reply = res.data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return reply || "Layla's speech bubble popped! Try again.";
  } catch (err) {
    console.error("Gemini error:", err.response?.data || err.message);
    return "Layla got confused! Ask again, maybe with simpler words.";
  }
}

module.exports = { askLayla };