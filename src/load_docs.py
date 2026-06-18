from langchain_community.document_loaders import TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter

loader = TextLoader(
    "docs/sample_docs/knowledge-assistant-platform_Knowledge_Base_v1.md",
    encoding="utf-8"
)

documents = loader.load()

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=100
)

chunks = splitter.split_documents(documents)

print(f"Total Chunks: {len(chunks)}")

for i, chunk in enumerate(chunks[:3]):
    print(f"\n{'='*50}")
    print(f"Chunk {i+1}")
    print(f"{'='*50}")
    print(chunk.page_content[:300])