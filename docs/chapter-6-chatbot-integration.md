
---

## 6️⃣ `chapter-6-chatbot-integration.md`

```markdown
---
id: chapter-6-chatbot-integration
title: Chapter 6 – Integrating ChatKit Chatbot into the Book
---

Now we connect the **FastAPI RAG backend** to a **chat interface** that appears inside the Docusaurus site.

We use **OpenAI ChatKit / Agents SDK** to build a flexible chatbot client.

## ChatKit Overview

ChatKit helps you:

- Define conversation state and tools  
- Call your own backend (FastAPI) as a tool  
- Stream responses to the frontend  
- Build customized chat experiences

## High-Level Flow

1. User opens the **Chat** page inside the Docusaurus book  
2. User types a question (or selects some text and then asks a question)  
3. Frontend sends the question to FastAPI `/query` endpoint  
4. FastAPI:
   - Queries Qdrant  
   - Calls LLM via ChatKit  
   - Returns an answer  
5. Frontend displays the answer in a chat bubble

## FastAPI Endpoint Example

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class QueryRequest(BaseModel):
    question: str
    selected_text: str | None = None

@app.post("/query")
def query_rag(request: QueryRequest):
    # If selected_text is provided, focus on that
    # Otherwise, run normal RAG over the whole book
    # Use Qdrant + ChatKit to build the answer
    return {
        "answer": "This will be generated from the book content.",
        "sources": ["chapter-4-rag-basics.md", "chapter-5-qdrant-setup.md"]
    }
