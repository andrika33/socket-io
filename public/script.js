const chatbox = document.getElementById("chatbox");
const message = document.getElementById("message");
const send = document.getElementById("send");

const socket = io()
socket.on("connect", ()=> console.log("socket connected"))

send.addEventListener("click", () => {
const msg = message.value.trim();

if (msg) {
    const chat = document.createElement("p");
    chat.textContent = msg;
    chatbox.appendChild(chat);
    message.value = "";
}
});