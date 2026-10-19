import { useState } from "react";
import DOMPurify from "dompurify";

export default function App() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  return (
    <div style={{ padding: 24 }}>
      <h1>Mural de comentários</h1>
      <input value={comment} onChange={(e) => setComment(e.target.value)} />
      <button
        onClick={() => {
          setComments([...comments, comment]);
          setComment("");
        }}
      >
        Enviar
      </button>
      {comments.map((c, i) => (
        <div
          key={i}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(c, {
              ALLOWED_TAGS: ["b", "i", "em", "strong"],
            }),
          }}
        />
      ))}
    </div>
  );
}
