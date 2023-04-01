const chatBody = document.getElementById('chat-body');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
	const messageText = messageInput.value;
	if (messageText !== '') {
		addMessage('user', messageText);
		// Here you can add your code to handle the bot's response
		messageInput.value = '';
	}
});

function addMessage(sender, message) {
	const messageContainer = document.createElement('div');
	messageContainer.classList.add('message-container');
	messageContainer.classList.add(sender === 'bot' ? 'bot-message' : 'user-message');

	const messageText = document.createElement('p');
	messageText.innerText = message;

	messageContainer.appendChild(messageText);
	chatBody.appendChild(messageContainer);
}
