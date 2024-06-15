// utils/streamOpenAI.js

export const streamChatCompletion = async (prompt, handleChunk) => {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    const data = await response.json();
    handleChunk(data.response);
  };
  