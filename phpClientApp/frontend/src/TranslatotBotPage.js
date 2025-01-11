import React, { useEffect, useState } from 'react';
import './TranslatotBotPage.css';

function TranslatotBotPage() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem('chatMessages'));
    if (savedMessages) {
      setMessages(savedMessages);
    } else {
      setMessages([{ text: 'Hello, how can I assist you with your translation today!', sender: 'bot' }]);
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatMessages', JSON.stringify(messages));
    }
  }, [messages]);

  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if(userInput.trim()){
        const newMessages = [
            ...messages,
            {text: userInput, sender:'user'},
        ];
        setMessages(newMessages);
        setUserInput('');
        try{
          const response = await fetch('http://localhost/backend/src/index.php', {
            method: 'POST',
            headers:{
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              text: userInput,
              sender: 'user',
            }),
          });
          const data = await response.json();

          // Adding the translated message to the chat after receiving the response 
          if(data.text && data.sender){
            const updatedMessages = [
              ...newMessages,
              { text: data.text, sender: data.sender },
            ];
            setMessages(updatedMessages);
          }else{
            // Error handling if the backend response is not as expected
            const updatedMessagesWithError = [
              ...newMessages,
              { text: 'Something went wrong with the translation', sender: 'gemini' },
            ];
            setMessages(updatedMessagesWithError);
          }
        }catch(error){
          // Handling network or other errors
          const updatedMessagesWithError = [
            ...newMessages,
            { text: 'There was an error with the translation service', sender: 'gemini' }
          ];
          setMessages(updatedMessagesWithError);
        }
    }
};


  const handleNewChat = () => {
    setMessages([{ text: 'Hello, how can I assist you with your translation today!', sender: 'bot' }]);
    localStorage.removeItem('chatMessages');
  };

  return (
    <div>
    <div className="container">
  <div className="chat-container">
    <div className="chat-window">
      {messages.map((message, index) => (
        <div key={index} className={`chat-bubble ${message.sender}`}>
          {message.text}
        </div>
      ))}
    </div>
    <div className="message-input-container">
      <input
        type="text"
        value={userInput}
        onChange={handleUserInputChange}
        placeholder="Type a message..."
        className="message-input"
      />
      <button onClick={handleSendMessage} className="send-button">
        Send
      </button>
    </div>
  </div>
</div>
<div>
  <button onClick={handleNewChat} className="new-chat-button">
    Start New Chat
  </button>
</div>
</div>
  );
}

export default TranslatotBotPage;
