const chatbotWindow = document.getElementById('chatbot-window');
const chatbotMessages = document.getElementById('chatbot-messages');

function toggleChatbot() {
    chatbotWindow.style.display = chatbotWindow.style.display === 'flex' ? 'none' : 'flex';
    if (chatbotWindow.style.display === 'flex') {
        chatbotWindow.style.flexDirection = 'column';
    }
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (message) {
        addMessage('user', message);
        getBotResponse(message);
        userInput.value = '';
    }
}

function addMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = text;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getBotResponse(input) {
    let response;
    if (input.toLowerCase().includes('hello')) {
        response = 'Hello! How can I assist you today?';
    } else if (input.toLowerCase().includes('help')) {
        response = 'Sure! Let me know your query.';
        
     } else if (input.toLowerCase().includes('how are you?')) {
            response = 'I am doing well, thank you! How about you?';
    }  
    else if (input.toLowerCase().includes('what can you do?')) {
            response = 'I can help you understand our website and find your lost property';
    }
    else if (input.toLowerCase().includes('what can you do')) {
            response = 'I can help you understand our website and find your lost property'
    }
    else if (input.toLowerCase().includes('what is your name?')) {
        response = 'I am a simple chatbot.';
    }
    else if (input.toLowerCase().includes('what is your name')) {
        response = 'I am a simple chatbot.';
    }
    else if (input.toLowerCase().includes('i have lost my property?')) {
        response = 'No need to worry. You can find your lost property on our website.'; 
    }
    else if (input.toLowerCase().includes('i have lost my property')) {
        response = 'No need to worry. You can find your lost property on our website.'; 
    }
    else if (input.toLowerCase().includes('how will i find my lost item?')) {
        response = 'Just search for your lost property in the lost items list. ';
    }
    else if (input.toLowerCase().includes('how will i find my lost item')) {
        response = 'Just search for your lost property in the lost items list. ';
    }
    else if (input.toLowerCase().includes('what information i need to provide about my lost property?')) {
        response = 'You need to provide a basic description (item type, color, dimensions, place where lost) about your lost item ';
    }
    else if (input.toLowerCase().includes('what information i need to provide about my lost property')) {
        response = 'You need to provide a basic description (item type, color, dimensions, place where lost) about your lost item ';
    }
    else if (input.toLowerCase().includes('what information i need to provide about my lost item?')) {
        response = 'You need to provide a basic description (item type, color, dimensions, place where lost) about your lost item ';
    }
    else if (input.toLowerCase().includes('what information i need to provide about my lost item')) {
        response = 'You need to provide a basic description (item type, color, dimensions, place where lost) about your lost item ';
    }
    else if (input.toLowerCase().includes('what information i need to provide?')) {
        response = 'You need to provide a basic description (item type, color, dimensions, place where lost) about your lost item ';
    }
    else if (input.toLowerCase().includes('what information i need to provide')) {
        response = 'You need to provide a basic description (item type, color, dimensions, place where lost) about your lost item ';
    }
    else if (input.toLowerCase().includes('how lost and found works?')) {
        response = 'Lost and Found is a platform where we help people find there lost items. We provide a interface where the person who found that lost item will upload some basic descriptions (like- item type, item image, item color, item dimensions) about the lost item. The user whose item has lost have to search for the lost item and also have to provide same mentioned description about the item. If both the provided descriptions matches then the user can use our communication portal to contact the finder and claim the lost property ';
    }
    else if (input.toLowerCase().includes('how lost and found works')) {
        response = 'Lost and Found is a platform where we help people find there lost items. We provide a interface where the person who found that lost item will upload some basic descriptions (like- item type, item image, item color, item dimensions) about the lost item. The user whose item has lost have to search for the lost item and also have to provide same mentioned description about the item. If both the provided descriptions matches then the user can use our communication portal to contact the finder and claim the lost property ';
    }
    else if (input.toLowerCase().includes('what information i need to provide about my lost property?')) {
        response = 'You need to provide a basic description (item type, color, dimensions, place where lost) about your lost item ';
    }
    else if (input.toLowerCase().includes('what information i need to provide about my lost property')) {
        response = 'You need to provide a basic description (item type, color, dimensions, place where lost) about your lost item ';
    }
    else if (input.toLowerCase().includes('is lost and found a trustable platform?')) {
        response = 'Yes, you can definately trust our platform for your lost items. ';
    }
    else if (message.toLowerCase().includes("is lost and found a trustable platform")) {
        botReply = "Yes, you can definately trust our platform for your lost items.";
    } 
    else {
        response = 'I\'m here to help! Could you please clarify your question?';
    }
    addMessage('bot', response);
}