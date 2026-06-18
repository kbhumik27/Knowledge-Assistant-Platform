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

## Day 2 – RAG Pipeline Development & Chatbot Implementation

### Document Processing

* Implemented document loading using LangChain document loaders.
* Successfully loaded the first knowledge source into the application.
* Configured document preprocessing workflow.
* Implemented text chunking using `RecursiveCharacterTextSplitter`.
* Generated optimized document chunks for retrieval.

### Embedding Generation

* Integrated Hugging Face embedding models.
* Selected and configured `BAAI/bge-small-en-v1.5` for semantic search.
* Generated vector embeddings for all document chunks.
* Verified embedding creation and storage process.

### Vector Database Integration

* Integrated ChromaDB as the vector database.
* Created persistent vector storage.
* Stored document embeddings successfully.
* Verified vector database creation and retrieval capabilities.

### Retrieval-Augmented Generation (RAG)

* Implemented semantic similarity search.
* Configured document retrieval workflow.
* Retrieved relevant document chunks based on user queries.
* Connected retrieval pipeline with Llama 3 8B.
* Successfully generated answers grounded in retrieved information.

### Query Engine Development

* Developed query processing workflow.
* Implemented context construction from retrieved chunks.
* Created prompt engineering framework for controlled responses.
* Configured answer generation using locally hosted Llama 3 8B.

### Chatbot Development

* Developed an interactive terminal-based chatbot.
* Enabled continuous user interaction through a conversational loop.
* Added chatbot startup and exit functionality.
* Implemented professional response formatting.

### User Experience Improvements

* Added greeting handling:

  * Hi
  * Hello
  * Hey
  * Good Morning
  * Good Afternoon
  * Good Evening

* Added courtesy response handling:

  * Thanks
  * Thank You
  * Thx

* Added empty-input validation.

* Improved answer readability using structured formatting.

* Reduced unnecessary verbosity in generated responses.

* Refined chatbot personality for professional interactions.

### Response Quality Improvements

* Enhanced prompt engineering to improve answer quality.
* Configured concise and professional response generation.
* Implemented bullet-point formatting for multi-item answers.
* Implemented numbered formatting for process-oriented responses.
* Reduced hallucination risk through retrieval grounding.
* Added relevance-based response filtering for unsupported queries.

### Testing & Validation

* Tested document retrieval functionality.
* Tested semantic search performance.
* Tested chatbot interaction flow.
* Validated response generation against NMCG sample knowledge base.
* Verified end-to-end RAG pipeline functionality.

### Day 2 Outcome

* Successfully built a fully functional Retrieval-Augmented Generation (RAG) chatbot.

* Established complete workflow:

  * Document Loading
  * Text Chunking
  * Embedding Generation
  * Vector Database Storage
  * Semantic Retrieval
  * LLM Response Generation

* Delivered the first working version of the Knowledge Assistant Platform capable of answering questions using uploaded knowledge sources.
