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

# Step 1: destroy production

./scripts/destroy.sh dev
./scripts/destroy.sh test
./scripts/destroy.sh prod


# Step 2: Clean Up Terraform Workspaces
After resources are destroyed, remove the workspaces:

cd terraform

# Switch to default workspace
terraform workspace select default

# Delete the workspaces
terraform workspace delete dev
terraform workspace delete test
terraform workspace delete prod

cd ..