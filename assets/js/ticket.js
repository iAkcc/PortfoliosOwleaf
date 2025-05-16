// Array para almacenar los tickets (simulando una base de datos)
let tickets = [];

// Array para almacenar los mensajes (simulando una base de datos)
let messages = [];

// Ticket seleccionado actualmente
let selectedTicketId = null;

// Función para crear un nuevo ticket
function createTicket(title, description) {
    const ticket = {
        id: Date.now(), // Usamos la fecha actual como ID único
        title,
        description,
        status: "Pendiente", // Estado inicial del ticket
    };
    tickets.push(ticket);
    renderTickets();
}

// Función para abrir el chat de un ticket
function openChat(ticketId) {
    selectedTicketId = ticketId;
    document.getElementById("chatContainer").style.display = "block";
    document.getElementById("chatTitle").textContent = `Chat del Ticket: ${tickets.find((t) => t.id === ticketId).title}`;
    renderMessages();
}

// Función para enviar un mensaje
function sendMessage(text, sender) {
    if (selectedTicketId) {
        const message = {
            ticketId: selectedTicketId,
            sender,
            text,
            timestamp: new Date().toLocaleTimeString(),
        };
        messages.push(message);
        renderMessages();
    }
}

// Función para marcar un ticket como resuelto
function resolveTicket(ticketId) {
    const ticket = tickets.find((t) => t.id === ticketId);
    if (ticket) {
        ticket.status = "Resuelto";
        renderTickets();
        renderMessages();
    }
}

// Función para renderizar la lista de tickets
function renderTickets() {
    const ticketsContainer = document.getElementById("ticketsContainer");
    ticketsContainer.innerHTML = ""; // Limpiar el contenedor

    tickets.forEach((ticket) => {
        const ticketItem = document.createElement("div");
        ticketItem.classList.add("ticket-item");
        ticketItem.onclick = () => openChat(ticket.id);

        ticketItem.innerHTML = `
            <h3>${ticket.title}</h3>
            <p>${ticket.description}</p>
            <p class="ticket-status ${ticket.status === "Resuelto" ? "resolved" : ""}">Estado: ${ticket.status}</p>
        `;

        ticketsContainer.appendChild(ticketItem);
    });
}

// Función para renderizar los mensajes del chat
function renderMessages() {
    const chatMessages = document.getElementById("chatMessages");
    chatMessages.innerHTML = ""; // Limpiar el contenedor

    const ticketMessages = messages.filter((m) => m.ticketId === selectedTicketId);
    ticketMessages.forEach((message) => {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", message.sender === "Usuario" ? "user" : "support");

        messageDiv.innerHTML = `
            <div class="sender">${message.sender}</div>
            <div class="text">${message.text}</div>
            <div class="timestamp">${message.timestamp}</div>
        `;

        chatMessages.appendChild(messageDiv);
    });

    // Desplazarse al final del chat
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Manejar el envío del formulario de chat
document.getElementById("chatForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const input = document.getElementById("chatInput");
    const text = input.value.trim();

    if (text) {
        sendMessage(text, "Usuario"); // El usuario envía un mensaje
        input.value = ""; // Limpiar el campo de entrada

        // Simular una respuesta del soporte después de 1 segundo
        setTimeout(() => {
            sendMessage("Hemos recibido tu mensaje. Estamos trabajando en ello.", "Soporte");
        }, 1000);
    }
});

// Manejar el botón de marcar como resuelto
document.getElementById("resolveButton").addEventListener("click", function() {
    if (selectedTicketId) {
        resolveTicket(selectedTicketId);
    }
});

// Crear algunos tickets de ejemplo
createTicket("Problema con el login", "No puedo iniciar sesión en la plataforma.");

// Renderizar tickets al cargar la página
renderTickets();