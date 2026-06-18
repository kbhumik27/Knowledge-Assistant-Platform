from langchain_community.vectorstores import Chroma
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_ollama import OllamaLLM

embedding_model = HuggingFaceEmbeddings(
    model_name="BAAI/bge-small-en-v1.5"
)

db = Chroma(
    persist_directory="vector_db",
    embedding_function=embedding_model
)

question = "What are the objectives of NMCG?"

retriever = db.as_retriever(search_kwargs={"k": 3})

docs = retriever.invoke(question)

print("\nRetrieved Chunks:\n")

for doc in docs:
    print(doc.page_content[:300])
    print("\n" + "="*50 + "\n")

context = "\n\n".join([doc.page_content for doc in docs])

prompt = f"""
You are a helpful assistant.

Answer ONLY using the context provided below.

Context:
{context}

Question:
{question}
"""

llm = OllamaLLM(
    model="llama3:8b",
    base_url="http://localhost:11434"
)

response = llm.invoke(prompt)

print("\nFinal Answer:\n")
print(response)