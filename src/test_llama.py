print("Starting script...")

from langchain_ollama import OllamaLLM

print("Connecting to model...")

llm = OllamaLLM(model="llama3:8b")

print("Sending prompt...")

response = llm.invoke(
    "What is the capital of India?"
)

print("\nResponse:\n")
print(response)