FROM ubuntu:22.04

RUN apt-get update && apt-get install -y python3 python3-pip
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY main.py /

ENV FASTAPI=hello
EXPOSE 8080
CMD uvicorn main:app --host 0.0.0.0 --port 8080

