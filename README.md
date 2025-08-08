# LeaveApp - Docker Dev Setup

Official repository:  
👉 https://github.com/adxmmbz/leave-app.git

---

## ✅ Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download)
- [Docker Desktop](https://www.docker.com/)

---

## 🚀 Get Started

Clone the repo and spin everything up:

```bash
git clone https://github.com/adxmmbz/leave-app.git
cd leave-app
docker compose up -d --build
```

This will:
- Start **SQL Server** in Docker (port `1433`)
- Build and serve the **Angular frontend** via NGINX (port `4200`)

---

## 🌐 Access the Application

Frontend (Angular):  
👉 http://localhost:4200

---

## 🗄️ Access the Database (SQL Server)

The SQL Server runs inside Docker.

You can connect using:
- SQL Server Management Studio (SSMS)
- Azure Data Studio
- DBeaver
- Or via .NET connection string

### 🔐 Connection details:

| Key       | Value             |
|-----------|-------------------|
| Server    | `localhost,1433`  |
| User      | `sa`              |
| Password  | `Test@1234`       |
| Database  | *`LeaveAppDb`*    |

### 💡 .NET connection string example:

```csharp
"Server=localhost,1433;Database=LeaveAppDb;User Id=sa;Password=Test@1234;TrustServerCertificate=True;"
```

---

## 🧪 Running Backend Manually

Run the backend API outside Docker:

```bash
cd LeaveApp.Api
dotnet restore
dotnet run
```

Make sure the backend run at:

👉 http://localhost:5255

Make sure your `appsettings.json` has this connection string:

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=localhost,1433;Database=LeaveAppDb;User Id=sa;Password=Test@1234;TrustServerCertificate=True;"
}
```

---

## 🧹 Reset / Rebuild Everything

If things break or you want a fresh start:

```bash
docker compose down --volumes --remove-orphans
docker compose build --no-cache
docker compose up -d
```

---

## 💬 Need Help?

Feel free to reach out or open an issue on the repo:  
👉 https://github.com/adxmmbz/leave-app/issues
👉 adam.haikal@mybiz.com
