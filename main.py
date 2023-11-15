from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
from pydantic import BaseModel
from unidecode import unidecode  
import math

class Person(BaseModel) :
    first_name : str
    last_name : str
    age : int

class Coeficients(BaseModel) :
    a : float
    b : float
    c : float

class Phrases(BaseModel) :
    phrase : str


app = FastAPI()

origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def index():
    return {
        "squares" : "/squares",
        "multiplication_tables" : "/multiplication_tables",
        "quadratic_formula" : "/quadratic_formula",
        "character_counter" : "/character_counter"
        }

@app.get("/squares")
def square(max_number: Optional[int] = 10):
    squared_numbers_result = [number ** 2 for number in range (1, max_number+1)]
        
    return {
        "max_number" : max_number,
        "squared_numbers_list" : squared_numbers_result
    }

@app.get("/multiplication_tables/{number}")
def multiplication_table(number : int, start: Optional[int] = 1, end: Optional[int] = 10):
    multiplication_table_result = [number*n for n in range (start, end+1)]

    return {
        "multiplication_table_result" : multiplication_table_result
    }

@app.post("/welcome")
def welcome_person(person : Person):
    return {
        "data" : f'Hello {person.first_name} {person.last_name}, you are {person.age}'
    }

@app.post("/quadratic_formula")
def quadratic_formula(coeficient: Coeficients):
    discriminant = math.sqrt(coeficient.b ** 2 - 4 * coeficient.a * coeficient.c)
    x1 = (-coeficient.b + discriminant) / (2 * coeficient.a)
    x2 = (-coeficient.b - discriminant) / (2 * coeficient.a)

    return {
        "equation" : f'{coeficient.a}x² {coeficient.b}x {coeficient.c}',
        "x1" : x1,
        "x2" : x2
    }

@app.post("/character_counter")
def character_counter(phrases : Phrases):
    vogals_count = sum(1 for character in unidecode(phrases.phrase.upper()) if character in ["A", "E", "I", "O", "U"])
    character_count = sum(1 for character in unidecode(phrases.phrase.upper()))
    space_count = sum(1 for character in unidecode(phrases.phrase.upper()) if character == " ")

    return {
        "vogals_count" : vogals_count,
        "character_count" : character_count,
        "space_count" : space_count
    }