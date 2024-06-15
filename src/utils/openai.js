import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
};

export const generateMessage = async (messages) => {
  const requestData = {
    model: "gpt-3.5-turbo",
    messages: messages,
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  };

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', requestData, { headers });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
