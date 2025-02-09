### **HNG12 Stage 0 Public API**  

This is a simple public API bulit with **Node.js** for HNG12 Stage 0 Backend that returns JSON with the email, current UTC datetime, and the GitHub repository link.

##  **Installation & Setup**  

### **Clone the Repository**  
```sh
git clone https://github.com/majuyitan/hngx-stage0-public-api.git  
cd hngx-stage0-public-api  
```

### **Install Dependencies**  
```sh
npm install
```

### **Run the Server**  
```sh
node server.js
```
Server should now be running at `http://localhost:3000/`

## **Deployment**  
This project is hosted on **Render**. The production API is accessible at:  
https://hngx-stage0-public-api-2kgx.onrender.com/

### Response Format:
```json
{
  "email": "olorundamisi1@example.com",
  "current_datetime": "2025-02-09T13:05:31.446Z",
  "github_url": "https://github.com/majuyitan/hngx-stage0-public-api"
}
```

## Hire Node.js Developers
[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)
