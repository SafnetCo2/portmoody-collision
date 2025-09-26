import React, { useState } from 'react';
import "../App.css"

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Hello! Welcome to Port Moody Collision. How can I assist you today?' },
    ]);
    const [userInput, setUserInput] = useState('');

    const toggleChatbot = () => setIsOpen(!isOpen);

    const handleSendMessage = () => {
        if (!userInput.trim()) return;

        const userMessage = { sender: 'user', text: userInput };
        setMessages(prev => [...prev, userMessage]);
        setUserInput('');

        // Simulate bot response with a delay
        setTimeout(() => {
            const botResponse = generateBotResponse(userInput.toLowerCase());
            setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
        }, 800);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSendMessage();
    };

    // Simple bot logic
    const generateBotResponse = (input) => {
        if (input.includes('appointment')) {
            return 'Sure! You can book an appointment by clicking the "Book an Appointment" button above.';
        } else if (input.includes('services')) {
            return 'We offer collision repair, painting, car wash, and general auto servicing.';
        } else if (input.includes('price') || input.includes('cost')) {
            return 'Pricing depends on the service. Can you tell me which service you are interested in?';
        } else if (input.includes('hello') || input.includes('hi')) {
            return 'Hi there! How can I help you with your car today?';
        } else {
            const fallbackResponses = [
                'I see! Could you tell me more about that?',
                'Thanks for sharing! How else can I assist you?',
                'Got it! Do you have any specific questions about our services?',
                'Interesting! Can you provide more details?',
            ];
            return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
        }
    };

    return (
        <>
            <button className="chatbot-toggle" onClick={toggleChatbot}>
                💬
            </button>

            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <span>Chat with Us</span>
                        <button className="chatbot-close" onClick={toggleChatbot}>
                            &times;
                        </button>
                    </div>

                    <div className="chatbot-body">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    <div className="chatbot-footer">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your message..."
                        />
                        <button onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;
