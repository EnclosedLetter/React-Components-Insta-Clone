// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, ] = useState(props.comments); //WHERE DOES PROP COME FROM? 
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map(comment => { //GET THE useState of comments var name, THEN MAP THROUGH THAT
        return <Comment comment={comment} />
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
