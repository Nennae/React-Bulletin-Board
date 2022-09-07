import PostLiked from "./PostLiked";
import { useState } from "react";

const ReactPost = ({data}) => {
      const { question, answer} = data;
      const [showLiked, setShowLiked] = useState(false)
      const [showButton, setShowButton] = useState(true);
      return (
            <>
            <div className="post-container">
            <p className="blue"><span>Fråga</span>{question}</p>
            <p className="green"><span>Svar</span>{answer}</p>
            {showLiked && (
                        <PostLiked />
                  )}
                  {showButton && (
                        <button onClick={() => {
                              setShowLiked(!showLiked)
                              setShowButton(!showButton)
                        }}>
                  Like
                  </button>

                  )}
            </div>
            </>
      );
}
export default ReactPost;