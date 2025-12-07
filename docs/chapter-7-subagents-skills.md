
---

## 7️⃣ `chapter-7-subagents-skills.md`

```markdown
---
id: chapter-7-subagents-skills
title: Chapter 7 – Subagents & Agent Skills (Bonus Marks)
---

For bonus marks, the hackathon encourages the use of **Subagents** and **Skills** in Claude Code or similar agent frameworks.

These concepts are inspired by the idea of loading special abilities on demand, similar to the **Matrix** movie where a character loads a “helicopter flying” program.

## What Are Subagents?

A **Subagent** is a specialized AI assistant focused on a specific task.  
Instead of one huge general agent, we create multiple small agents such as:

- **Outline Agent** – designs chapter outlines and structures  
- **Writer Agent** – expands sections into full text  
- **RAG Agent** – designs retrieval prompts and tests queries  
- **Code Agent** – helps write backend and deployment scripts  

Each agent has its own instructions and skills.

## What Are Skills?

A **Skill** is a reusable piece of logic or knowledge that can be attached to agents.

Examples:

- `ChunkTextSkill` – splits long text into overlapping chunks  
- `CreateEmbeddingsSkill` – generates embeddings for given text  
- `SummarizeChapterSkill` – creates short bullet summaries  
- `ExplainCodeSkill` – explains a given code snippet line by line  

You can define skills in Claude Code as reusable functions / prompts that agents call when needed.

## Example Skill Definition (Conceptual)

```text
Skill Name: ChunkTextSkill
Input: raw_markdown_text
Output: list_of_chunks

Description:
Takes a long Markdown document and returns overlapping text chunks
of around 300–500 characters, preserving headings where possible.
