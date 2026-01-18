# docker-kubernetes
A React web application deployed using Docker and Kubernetes for learning container orchestration.

=======
## 🎥 YouTube Video Tutorial

👉 Watch the complete practical Docker explanation here:  
🔗 https://youtu.be/k3q_5KzBgOc?si=I1FpfYBkZaoc74iD

In this video, I explain:
- How to Dockerize a React + Vite project
- How to create a Docker image
- How to run containers
- How multiple containers run independently from the same image

---

## 🐳 Docker Commands Used

### Build Docker Image

```bash
docker build -t ecommerce-react .

Run Docker Container

docker run -p 8083:80 ecommerce-react
docker run -d -p 8083:80 ecommerce-react

Check Running Containers
 
docker ps

Stop a Running Container

docker stop <container id >


>>>>>>> f75446f (React E-Commerce project updated: Docker setup, README)
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
>>>>>>> 156ac8f (ReactBasciCncpt)

---
- git init
- git status
- git add .gitignore
- git add .
- git commit -m "Initial project setup"
- git remote add origin https://github.com/username/project-name.git
- check
- git remote -v
- git push -u origin main
- git pull origin main --allow-unrelated-histories
- git branch
- git branch -M main
- git push -u origin main

-for whenever u change code
---
git status
git add .
git commit -m "Added login feature"
git push
---
--useful git command
git log          # commit history
git diff         # see changes
git pull         # get latest code
git clone URL    # download repo
