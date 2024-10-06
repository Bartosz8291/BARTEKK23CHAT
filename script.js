const conversationList = document.querySelector('.conversation-list');
const chatWindow = document.querySelector('.chat-window');
const messageInput = document.querySelector('.message-input input');
const sendButton = document.querySelector('.message-input button');

// Function to add a message to the chat window
function addMessage(message, isUser) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add('message', isUser ? 'user-message' : 'bot-message');
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}

// Event listener for the send button
sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        addMessage(message, true); // Add the user's message
        // Here, you would typically send the message to the server
        // and receive a response from the bot
        addMessage('Bot response', false); // Add the bot's response (for demonstration)
        messageInput.value = '';
    }
});
