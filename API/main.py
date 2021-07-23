from fastapi import FastAPI

from transformers import AutoTokenizer
import torch
import wikipedia


def retreieve_context(question):
    wiki = wikipedia.page(question)
    content = wiki.content
    link = wiki.url

    return content, link


app = FastAPI()
if torch.cuda.is_available():
    model = torch.load('model.h5', map_location=torch.device('cuda'))
else:
    model = torch.load('model.h5', map_location=torch.device('cpu'))


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/predict")
def predict(question: str):
    tokenizer = AutoTokenizer.from_pretrained('distilroberta-base')
    text, link = retreieve_context(question)
    inputs = tokenizer(question, text, max_length=512,
                       return_tensors="pt", truncation=True, padding='max_length')
    input_ids = inputs["input_ids"].tolist()[0]

    outputs = model(**inputs)
    answer_start_scores = outputs.start_logits
    answer_end_scores = outputs.end_logits
    answer_start = torch.argmax(answer_start_scores)
    answer_end = torch.argmax(answer_end_scores) + 1
    answer = tokenizer.convert_tokens_to_string(
        tokenizer.convert_ids_to_tokens(input_ids[answer_start:answer_end]))

    return {'question': question, 'answer': answer.strip(), 'link': link}
