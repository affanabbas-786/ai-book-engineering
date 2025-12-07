import React, { useState } from 'react';

export default function ChatPage() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleAsk() {
    setLoading(true);
    setError('');
    setAnswer('');

    try {
      const res = await fetch('http://localhost:8000/query', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.answer || 'No answer returned.');
    } catch (err) {
      console.error(err);
      setError('Backend not reachable. Is FastAPI running on port 8000?');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: '2rem', maxWidth: 800, margin: '0 auto' }}>
      <h1>Book RAG Chatbot</h1>
      <p>Ask questions about the content of this book.</p>

      <textarea
        rows={3}
        style={{ width: '100%', marginBottom: '1rem' }}
        value={question}
        onChange={e => setQuestion(e.target.value)}
        placeholder="Type your question here..."
      />

      <button onClick={handleAsk} disabled={loading || !question.trim()}>
        {loading ? 'Thinking…' : 'Ask'}
      </button>

      {error && (
        <p style={{ marginTop: '1rem', color: 'red' }}>{error}</p>
      )}

      {answer && (
        <div style={{ marginTop: '2rem', whiteSpace: 'pre-wrap' }}>
          <h2>Answer</h2>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
