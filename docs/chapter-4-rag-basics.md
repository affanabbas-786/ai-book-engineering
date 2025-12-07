
---

## 4️⃣ `chapter-4-rag-basics.md`

```markdown
---
id: chapter-4-rag-basics
title: Chapter 4 – Understanding RAG (Retrieval Augmented Generation)
---

A simple language model answers questions using its **internal training data**.  
But in our project, we want the model to answer based on **this book’s content** specifically.

For that, we use **RAG – Retrieval Augmented Generation**.

## What Is RAG?

RAG is a technique where the model:

1. **Retrieves** relevant information from external documents  
2. **Augments** its context with that information  
3. **Generates** an answer using both the question and retrieved content

In our case, the external documents are the **Markdown files of this book**.

## Core Components of RAG

To implement RAG, we need:

- A way to store document snippets (chunks)  
- A way to convert text into embeddings (vector representation)  
- A **Vector Database** to store and search those embeddings  
- A backend that:
  - Receives user questions  
  - Finds relevant text chunks  
  - Sends both question and chunks to the LLM  
  - Returns the final answer

## RAG Flow for This Project

1. **Preprocessing Step**
   - Read all `.md` files from the `docs/` folder  
   - Split each file into smaller chunks (for example, 300–800 characters)  
   - Create embeddings for each chunk  
   - Store these embeddings in **Qdrant Cloud**

2. **Query Step (User Asks a Question)**
   - Convert the question into embeddings  
   - Use Qdrant to find similar chunks  
   - Send the question + top chunks to the LLM via ChatKit  
   - Generate an answer based only on those chunks

3. **Selected Text Mode (Bonus)**
   - User selects some text in the book  
   - Only that selected text is passed to the backend  
   - Chatbot answers based **only** from that selected section

## Why RAG Is Important in This Hackathon

- It proves that the chatbot actually **uses the book content**  
- It demonstrates your understanding of **embeddings and retrieval**  
- It is a practical pattern used in real-world AI systems  

RAG turns a static book into an **interactive knowledge system**.
