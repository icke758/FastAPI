from pydantic import BaseModel

class Coeficients(BaseModel) :
    a : float
    b : float
    c : float