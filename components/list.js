import React, { useState } from "react";

export function MessagesList() {
    const [messages, setMessages] = useState([
    { id: 'id1', text: "message 1", heading: 'Head1'},
    { id: 'id2', text: "message 2", heading: 'Head2'},
    { id: 'id3', text: "message 3", heading: 'Head3'},
    ]);
    return messages.map((message) =>
        <>
        <h2>{message.heading}</h2>
        <div key={message.id}>{message.text}</div>
        </>
        );
    }

    export default MessagesList;
    