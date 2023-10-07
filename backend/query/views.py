from django.shortcuts import render
# from langchain.embeddings import HuggingFaceEmbeddings
from django.http import JsonResponse
# from langchain.embeddings import GooglePalmEmbeddings
# from transformers import pipeline

import json
from django.views.decorators.csrf import csrf_exempt

from django.db import connection
import bcrypt

@csrf_exempt
def register_user(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data.get('Username')
            password = data.get('Password')
            print(password)

            if not username or not password:
                return JsonResponse({'message': 'Username and password are required'}, status=400)
            concat_value = username + password
            # Hash the password using bcrypt
            hashed_password = bcrypt.hashpw(
                concat_value.encode('utf-8'), bcrypt.gensalt())

            # Insert the user data into the User_Relation table
            with connection.cursor() as cursor:
                cursor.execute(
                    "INSERT INTO User_Relation (username, password) VALUES (%s, %s)",
                    (username, hashed_password.decode('utf-8'))
                )

            return JsonResponse({'message': 'User registered successfully'})

        except json.JSONDecodeError:
            return JsonResponse({'message': 'Invalid JSON data'}, status=400)

    return JsonResponse({'message': 'Only POST requests are allowed'}, status=405)

# SUMMARIZER_API_URL = "https://api-inference.huggingface.co/models/philschmid/bart-large-cnn-samsum"
# headers = {"Authorization": "Bearer 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"}

# def summarize_text(payload):
#     response = requests.post(SUMMARIZER_API_URL, headers=headers, json=payload)
#     return response.json()

def say_hello(request):
    return render(request,'hello.html')

def home(req):
    return render(req,'home.html')

def remove_special_characters(text_list):
    special_chars = ["[", "]", "\\", "\n"]
    for char in special_chars:
        text_list = [text.replace(char, "") for text in text_list]
    return text_list

""" def norwegian_wood(request):
    embedding2 = HuggingFaceEmbeddings()
    vdb_chunks_HF = FAISS.load_local("query/vdb_chunks_HF", embedding2, index_name="indexHF")
    query = request.GET.get('query', '')
    print(query)
    ans = vdb_chunks_HF.as_retriever().get_relevant_documents(query)

    # Assuming ans is a list of documents and you want to return all document's page content
    final_ans = [doc.page_content for doc in ans] if ans else []
    print(final_ans)

    # Prepare the JSON response with all answers in a single "answers" field
    response_data = {
        'answers': final_ans
    }

    return JsonResponse(response_data)


def turing_paper(request):
    embedding2 = HuggingFaceEmbeddings()
    vdb_chunks_HF = FAISS.load_local("query/vdb_chunks_HF", embedding2, index_name="indexTuring")
    query = request.GET.get('query', '')
    print(query)
    ans = vdb_chunks_HF.as_retriever().get_relevant_documents(query)

    # Assuming ans is a list of documents and you want to return all document's page content
    answers = [doc.page_content for doc in ans] if ans else []
    print(answers)

    # Return all answers as a JSON response
    return JsonResponse({'answers': answers})

from transformers import pipeline

def psych(request):
    embedding2 = GooglePalmEmbeddings(google_api_key="AIzaSyBysL_SjXQkJ8lI1WPTz4VwyH6fxHijGUE")
    vdb_chunks_HF = FAISS.load_local("query/vdb_chunks_HF", embedding2, index_name="indexPsych")
    query = request.GET.get('query', '')

    # Check if the user's query contains the word "summary"

    # Retrieve relevant documents
    ans = vdb_chunks_HF.as_retriever().get_relevant_documents(query)
    answers = [doc.page_content for doc in ans] if ans else []

    # Return answers and summary as a JSON response
    return JsonResponse({'answers': answers})


def eighty(request):
    embedding2 = GooglePalmEmbeddings(google_api_key="AIzaSyBysL_SjXQkJ8lI1WPTz4VwyH6fxHijGUE")
    vdb_chunks_HF = FAISS.load_local("query/vdb_chunks_HF", embedding2, index_name="indexEighty")
    query = request.GET.get('query', '')

    # Check if the user's query contains the word "summary"

    # Retrieve relevant documents
    ans = vdb_chunks_HF.as_retriever().get_relevant_documents(query)
    answers = [doc.page_content for doc in ans] if ans else []

    # Return answers and summary as a JSON response
    return JsonResponse({'answers': answers})

def jh(request):
    embedding2 = GooglePalmEmbeddings(google_api_key="AIzaSyBysL_SjXQkJ8lI1WPTz4VwyH6fxHijGUE")
    vdb_chunks_HF = FAISS.load_local("query/vdb_chunks_HF", embedding2, index_name="indexJH")
    query = request.GET.get('query', '')

    # Check if the user's query contains the word "summary"

    # Retrieve relevant documents
    ans = vdb_chunks_HF.as_retriever().get_relevant_documents(query)
    answers = [doc.page_content for doc in ans] if ans else []

    # Return answers and summary as a JSON response
    return JsonResponse({'answers': answers})

def mov(request):
    embedding2 = GooglePalmEmbeddings(google_api_key="AIzaSyBysL_SjXQkJ8lI1WPTz4VwyH6fxHijGUE")
    vdb_chunks_HF = FAISS.load_local("query/vdb_chunks_HF", embedding2, index_name="indexMOV")
    query = request.GET.get('query', '')

    # Check if the user's query contains the word "summary"

    # Retrieve relevant documents
    ans = vdb_chunks_HF.as_retriever().get_relevant_documents(query)
    answers = [doc.page_content for doc in ans] if ans else []

    # Return answers and summary as a JSON response
    return JsonResponse({'answers': answers}) """