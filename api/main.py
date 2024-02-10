from fastapi import FastAPI

app = FastAPI(debug=True)

@app.get('/ping')
def ping_pong():
    return {'_': 'pong'}