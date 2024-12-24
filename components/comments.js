import React, { useState } from "react";

export function CommentsList() {
    const [comments, setComments] = useState([
    { id: '1', text: "Comment 1"},
    { id: '2', text: "Comment 2"},
    { id: '3', text: "Comment 3"},
    ]);

    const deleteComments = (id) => {
        const newComments = comments.filter((comment) =>{
            return comment.id !== id;
        })
        setComments(newComments)
    }

    return comments.map((comment) =>
        <>
        
        <div key={comment.id}>{comment.text}</div>
        <button  onClick={() => {deleteComments(comment.id)}}>Удалить</button>
        </>
        );
    }

    export default CommentsList;