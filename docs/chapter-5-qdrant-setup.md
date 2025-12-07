---
id: chapter-5-qdrant-setup
title: Chapter 5 – Qdrant Cloud + Embeddings + FastAPI
---

In this chapter, we connect our book content to a **vector database** using **Qdrant Cloud** and set up a basic **FastAPI** backend.

## What Is Qdrant?

Qdrant is an open-source **vector database**.  
It stores embeddings and lets us search for similar vectors quickly.

In this project, Qdrant stores embeddings of all our book’s text chunks.

## Setting Up Qdrant Cloud

1. Go to the Qdrant Cloud website  
2. Create a free tier account and cluster  
3. Note the following values:
   - Qdrant URL  
   - API key  
   - Collection name (for example: `book-chunks`)

These values will be used in the backend code.

## Installing Python Dependencies

We create a separate backend project folder, for example:

```text
rag-api/
  main.py
  embed.py
  requirements.txt
