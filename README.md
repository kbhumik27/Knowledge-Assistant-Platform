# Knowledge-Assistant-Platform
An internal RAG-based chatbot for varied requirements, providing faster information than manually scanning documents or websites!

# Development Log

## Day 1 – Project Setup & LLM Integration

### Project Planning

* Finalized project vision from a single NMCG chatbot to a reusable Knowledge Assistant Platform.
* Defined architecture supporting multiple knowledge bases (NMCG, Tourism, other client domains).
* Finalized technology stack:

  * Llama 3 8B (Ollama)
  * LangChain
  * ChromaDB
  * Sentence Transformers
  * PyMuPDF
  * Streamlit (planned)

### Repository & Environment Setup

* Created GitHub repository.
* Renamed repository to **Knowledge-Assistant-Platform**.
* Cloned repository locally and configured Git.
* Created project folder structure.
* Configured `.gitignore`.
* Created initial README and project documentation.

### Python Environment

* Installed Python.
* Created and activated virtual environment (`venv`).
* Verified package installation workflow.

### LLM Setup

* Installed Ollama locally.
* Downloaded and configured **Llama 3 8B**.
* Verified Ollama installation and model availability.

### LangChain Integration

* Installed `langchain-ollama`.
* Created first test script (`test_llama.py`).
* Successfully connected Python → LangChain → Ollama → Llama 3.
* Generated first local LLM response:

  * Prompt: "What is the capital of India?"
  * Response: "The capital of India is New Delhi."

### RAG Preparation

* Installed:

  * ChromaDB
  * Sentence Transformers
  * PyMuPDF
  * LangChain Community
* Created initial RAG module structure:

  * `load_docs.py`
  * `create_embeddings.py`
  * `query_docs.py`

### Knowledge Base Preparation

* Created first sample knowledge document:

  * `NMCG_Knowledge_Base_v1.md`
* Prepared document structure for future RAG ingestion.

### Version Control

* Resolved Git merge and remote repository issues.
* Successfully synchronized local and remote repositories.
* Pushed initial project setup to GitHub.

### Day 1 Outcome

* Fully functional local LLM environment established.
* Project architecture finalized.
* Ready to begin RAG pipeline development.