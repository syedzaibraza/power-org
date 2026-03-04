"use client";

import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

export interface Comment {
  id: string;
  author: string;
  body: string;
  date: string;
}

interface CommentSectionProps {
  eventSlug: string;
  initialComments?: Comment[];
}

export function CommentSection({ eventSlug, initialComments = [] }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!body.trim()) return;
    const newComment: Comment = {
      id: crypto.randomUUID(),
      author: author.trim() || "Anonymous",
      body: body.trim(),
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }),
    };
    setComments((prev) => [newComment, ...prev]);
    setBody("");
    setAuthor("");
  };

  return (
    <div className="bg-[#F4F6F9] rounded-[12px] p-6 md:p-8" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
      <div className="flex items-center gap-2 mb-6">
        <MessageCircle size={22} className="text-[#1B3A6B]" />
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1B3A6B" }}>
          Comments {comments.length > 0 && `(${comments.length})`}
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <input
          type="text"
          placeholder="Your name (optional)"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full px-4 py-3 rounded-[8px] border border-[#ddd] bg-white focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/30 focus:border-[#1B3A6B]"
          style={{ fontSize: "14px" }}
        />
        <textarea
          placeholder="Write a comment..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={4}
          required
          className="w-full px-4 py-3 rounded-[8px] border border-[#ddd] bg-white focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/30 focus:border-[#1B3A6B] resize-none"
          style={{ fontSize: "14px" }}
        />
        <button
          type="submit"
          className="bg-[#1B3A6B] text-white rounded-[8px] px-5 py-2.5 hover:bg-[#0D7377] transition-colors flex items-center gap-2"
          style={{ fontSize: "14px", fontWeight: 600 }}
        >
          Post Comment <Send size={16} />
        </button>
      </form>

      <div className="space-y-4">
        {comments.length === 0 ? (
          <p style={{ fontSize: "14px", color: "#777" }}>No comments yet. Be the first to share your thoughts!</p>
        ) : (
          comments.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-[8px] p-4 border border-[#eee]"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span style={{ fontSize: "14px", fontWeight: 600, color: "#1B3A6B" }}>{c.author}</span>
                <span style={{ fontSize: "12px", color: "#888" }}>{c.date}</span>
              </div>
              <p style={{ fontSize: "14px", color: "#444", lineHeight: 1.6 }}>{c.body}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
