import React, { useContext, useState } from "react";
import { AuthContext } from "../../../App";

function CommentBox(): React.ReactElement {
  const [comment, setComment] = useState("");
  const { user } = useContext(AuthContext);

  return (
    <div className="item--reservation">
      <h3>Reservar</h3>
      {!user && <p> Você precisa estar logado para reservar um item!</p>}

      {user && (
        <div>
          <label htmlFor="name">Nome:</label>
          <input id="name" type="text" disabled={true} value={user.getName()} />

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            disabled={true}
            value={user.getEmail()}
          />
          <div>
            <label htmlFor="comment">Comentário:</label>
            <textarea
              id="comment"
              value={comment}
              onChange={(event) => {
                setComment(event.target.value);
              }}
            />
          </div>
          <button
            onClick={() => {
              console.log(comment, user?.getName(), user?.getEmail());
            }}
          >
            Reservar
          </button>
        </div>
      )}
    </div>
  );
}

export default CommentBox;
