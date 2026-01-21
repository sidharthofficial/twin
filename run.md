# dockerize & Mangum zip (everything in deploy.py)

cd backend
uv run deploy.py



# Backend (FastAPI) local:

cd backend
uv pip install -r requirements.txt  
uv run python server.py

#2 or uv sync if using pyproject.toml
This starts the FastAPI server (likely on http://localhost:8000)




# Frontend (Next.js) local:

cd frontend
npm install
npm run dev

This starts the Next.js dev server (likely on http://localhost:3000)


# deploy 

./scripts/deploy.sh dev
./scripts/deploy.sh test
./scripts/deploy.sh prod

# destroy

./scripts/destroy.sh dev
./scripts/destroy.sh test
./scripts/destroy.sh prod