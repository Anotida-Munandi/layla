async function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    if (!message) return;
  
    addMessage(message, 'user');
    input.value = '';
  
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
  
    const data = await response.json();
    addMessage(data.reply, 'bot');
  }
  
  function addMessage(text, sender) {
    const chatBox = document.getElementById('chat-box');
    const msg = document.createElement('div');
    msg.className = message ${sender};
    msg.textContent = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
  };