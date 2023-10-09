from django.http import JsonResponse
from django.shortcuts import render
from langchain.embeddings import HuggingFaceEmbeddings
from django.http import JsonResponse, QueryDict
from langchain.embeddings import GooglePalmEmbeddings
from transformers import pipeline
import faiss
from langchain.embeddings import GooglePalmEmbeddings
# from transformers import pipeline
from langchain.vectorstores import FAISS
import bcrypt
import json
from django.views.decorators.csrf import csrf_exempt
from django.db import connection
import re

def is_valid_email(email):
    # Regular expression for a valid email format
    email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(email_pattern, email)

@csrf_exempt
def register_user(request):
    if request.method == 'POST':
        print(request.body)
        try:
            data = json.loads(request.body)
            username = data.get('Username')
            password = data.get('Password')
            email = data.get('Email')
            queries_data = ''
            print(password)

            # Check if email is valid
            if not is_valid_email(email):
                return JsonResponse({'message': 'Invalid email format'}, status=400)

            if not username or not password or not email:
                return JsonResponse({'message': 'Username, password and email are required'}, status=400)
            concat_value = username + password
            # Hash the password using bcrypt
            hashed_password = bcrypt.hashpw(
                concat_value.encode('utf-8'), bcrypt.gensalt())

            # Insert the user data into the User_Relation table
            with connection.cursor() as cursor:
                cursor.execute(
                    "INSERT INTO User_Relation (username, password, email, queries_data) VALUES (%s, %s, %s, %s)",
                    (username, hashed_password.decode(
                        'utf-8'), email, queries_data)
                )
            return JsonResponse({'message': 'User registered successfully'})

        except json.JSONDecodeError:
            return JsonResponse({'message': 'Invalid JSON data'}, status=400)

    return JsonResponse({'message': 'Only POST requests are allowed'}, status=405)

@csrf_exempt
def login_user(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data.get('Username')
            password = data.get('Password')

            if not username or not password:
                return JsonResponse({'message': 'Username and password are required'}, status=400)

            # Retrieve user data from the database based on the username
            with connection.cursor() as cursor:
                cursor.execute(
                    "SELECT * FROM User_Relation WHERE username = %s", [username])
                user_data = cursor.fetchone()

            if user_data:
                # Check if the provided password matches the hashed password in the database
                # Assuming password is in the third column
                stored_password = user_data[2]
                if bcrypt.checkpw((username + password).encode('utf-8'), stored_password.encode('utf-8')):
                    # Authentication successful
                    return JsonResponse({'message': 'Login successful'})
                else:
                    return JsonResponse({'message': 'Invalid username or password'}, status=401)
            else:
                return JsonResponse({'message': 'User not found'}, status=404)

        except json.JSONDecodeError:
            return JsonResponse({'message': 'Invalid JSON data'}, status=400)

    return JsonResponse({'message': 'Only POST requests are allowed'}, status=405)

def say_hello(request):
    return render(request, 'hello.html')

def home(req):
    return render(req, 'home.html')

def remove_special_characters(text_list):
    special_chars = ["[", "]", "\\", "\n"]
    for char in special_chars:
        text_list = [text.replace(char, "") for text in text_list]
    return text_list

def beautify(text_list):
    main_answer = []
    for text in text_list:
        text = re.sub(r'\([^)]*\)|<[^>]*>', '', text)
        text = re.sub(r'(\.\s[•A-Za-z0-9])\s', r'\1\n', text)
        text = re.sub(r'\.{2,}', '', text)
        main_answer.append(text)
    

    return main_answer


@csrf_exempt
def nasa(request):

    embedding2 = GooglePalmEmbeddings(
        google_api_key="AIzaSyBysL_SjXQkJ8lI1WPTz4VwyH6fxHijGUE")
    vdb_chunks_HF = FAISS.load_local(
        "query/vdb_chunks_HF", embedding2, index_name="indexnasa")
    query = request.GET.get('query', '')
    username = request.GET.get('username', '')

    # Check if the user's query contains the word "summary"

    # Retrieve relevant documents
    ans = vdb_chunks_HF.as_retriever().get_relevant_documents(query)
    answers = [doc.page_content for doc in ans] if ans else []

    # Define the regex pattern
    pattern = r'\d+\.\d+\.\d+'

    # Find and store matches in answers and sections
    sections = []
    for answer in answers:
        matches = re.findall(pattern, answer)
        sections.extend(matches)

    # Append the query to the queries_data field in the table (uncomment if needed)
    # with connection.cursor() as cursor:
    #     cursor.execute(
    #         "UPDATE User_Relation SET queries_data = CONCAT(queries_data, %s) WHERE username = %s",
    #         (f' {query}, {username}')
    #     )

    # Return answers, sections, and references as a JSON response
    good_answers = beautify(answers)
    return JsonResponse({'answers': good_answers, 'sections': sections, 'references': 'https://standards.nasa.gov/sites/default/files/standards/NASA/Baseline-w/CHANGE-1/1/nasa-std-5018_revalidated.pdf'})


@csrf_exempt
def bulletin(request):

    embedding2 = GooglePalmEmbeddings(
        google_api_key="AIzaSyBysL_SjXQkJ8lI1WPTz4VwyH6fxHijGUE")
    vdb_chunks_HF = FAISS.load_local(
        "query/vdb_chunks_HF", embedding2, index_name="indexBulletin")
    query = request.GET.get('query', '')

    if not query:
        return JsonResponse({'error': 'Query parameter is required'}, status=400)

    # Check if the user's query contains the word "summary"

    # Retrieve relevant documents
    ans = vdb_chunks_HF.as_retriever().get_relevant_documents(query)
    answers = [doc.page_content for doc in ans] if ans else []

    # Define the regex pattern
    pattern = r'No\. \d{2}-\d{2}'

    # Find and store matches in answers and sections
    sections = []
    for answer in answers:
        matches = re.findall(pattern, answer)
        sections.extend(matches)
        
        
    good_answers = [beautify(answers)]
    # Return answers, sections, and references as a JSON response
    return JsonResponse({'answers': good_answers, 'sections': sections, 'references': 'https://www.nasa.gov/wp-content/uploads/2022/05/tb_summary_091922.pdf'})


@csrf_exempt
def standards(request):
    
    embedding2 = GooglePalmEmbeddings(
        google_api_key="AIzaSyBysL_SjXQkJ8lI1WPTz4VwyH6fxHijGUE")
    vdb_chunks_HF = FAISS.load_local(
        "query/vdb_chunks_HF", embedding2, index_name="indexStandards")
    query = request.GET.get('query', '')

    if not query:
        return JsonResponse({'error': 'Query parameter is required'}, status=400)

    # Check if the user's query contains the word "summary"

    # Retrieve relevant documents
    ans = vdb_chunks_HF.as_retriever().get_relevant_documents(query)
    answers = [doc.page_content for doc in ans] if ans else []

    # Define the regex pattern
    pattern = r'\d+\.\d+\.\d+\.\d+'

    # Find and store matches in answers and sections
    sections = []
    for answer in answers:
        matches = re.findall(pattern, answer)
        sections.extend(matches)

    good_answers = [beautify(answers)]
    # Return answers, sections, and references as a JSON response
    response_data = {
        'answers': good_answers,
        'sections': sections,
        'references': 'https://standards.nasa.gov/all-standards',
    }
    return JsonResponse(response_data)


@csrf_exempt
def spacetech(request):
    
    embedding2 = GooglePalmEmbeddings(
        google_api_key="AIzaSyBysL_SjXQkJ8lI1WPTz4VwyH6fxHijGUE")
    vdb_chunks_HF = FAISS.load_local(
        "query/vdb_chunks_HF", embedding2, index_name="indexSpaceTech")
    query = request.GET.get('query', '')

    if not query:
        return JsonResponse({'error': 'Query parameter is required'}, status=400)

    # Check if the user's query contains the word "summary"

    # Retrieve relevant documents
    ans = vdb_chunks_HF.as_retriever().get_relevant_documents(query)
    answers = [doc.page_content for doc in ans] if ans else []

    # Define the regex pattern
    pattern = r'\d+\.\d+'

    # Find and store matches in answers and sections
    sections = []
    for answer in answers:
        matches = re.findall(pattern, answer)
        sections.extend(matches)

    good_answers = [beautify(answers)]
    
    # Return answers, sections, and references as a JSON response
    response_data = {
        'answers': good_answers,
        'sections': sections,
        'references': 'https://sti.nasa.gov/',
    }
    return JsonResponse(response_data)


@csrf_exempt
def queries_request(request):
    if request.method == 'GET':
        try:

            data = json.loads(request.body)
            username = data.get('Username')
            print(username)

            if not username:
                return JsonResponse({'message': 'Username is required'}, status=400)

            # Retrieve query data from the database based on the username
            with connection.cursor() as cursor:
                cursor.execute(
                    "SELECT queries_data FROM User_Relation WHERE username = %s", [username])
                query_data = cursor.fetchone()

            if query_data:
                # Extract the query data from the result
                # Assuming queries_data is in the first column
                queries_data = query_data[0]

                return JsonResponse({'queries_data': queries_data})
            else:
                return JsonResponse({'message': 'User not found'}, status=404)

        except json.JSONDecodeError:
            return JsonResponse({'message': 'Invalid JSON data'}, status=400)

    return JsonResponse({'message': 'Only GET requests are allowed'},status=405)
