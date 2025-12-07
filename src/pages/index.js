import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="AI Book Engineering"
      description="Spec-Driven AI book with integrated RAG chatbot"
    >
      <main style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h1>AI Book Engineering</h1>
        <p style={{ fontSize: '1.1rem', marginTop: '1rem' }}>
          Learn how to design, build, and ship AI-powered books with
          spec-driven writing and Retrieval-Augmented Generation.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            className="button button--primary button--lg"
            to="/docs/chapter-1-introduction"
          >
            Start Reading the Book 📘
          </Link>

          <Link
            className="button button--secondary button--lg"
            to="/chat"
          >
            Open RAG Chatbot 🤖
          </Link>
        </div>
      </main>
    </Layout>
  );
}
