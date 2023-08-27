let inputMessage = document.getElementById('input-message');
let sendMessage = document.getElementById('send-message');
let chatMessages = document.querySelector('.chat-messages');
const arrayMessages = [
    {
        id: 1,
        user: 'user001',
        message: 'Hello, its a test',
    }
];

function readMessages() {
    for(let i = 0; i < arrayMessages.length; i++) {
         chatMessages.innerHTML += `
            <div class="message-user-1">
                <img src="/images/user_1.png" alt="user-1">
                <div class="message-user">
                    <p>
                        What is design?
                    </p>
                </div>
                <img src="/icons/edit.svg" alt="edit">
            </div>
         `;
    }
};

function addedMessage(message) {
    arrayMessages.push(
        {
            id: arrayMessages.length + 1,
            user: 'user001',
            message: message
        }
    );

    inputMessage.value = null;
};

sendMessage.addEventListener('click', function() {
    addedMessage(inputMessage.value);
});

