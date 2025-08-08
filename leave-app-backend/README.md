# Leave App Backend (.NET 8 Web API)

Backend for the Leave Application system.

## Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download)
- [Docker](https://www.docker.com/) (for SQL Server)

## Database Setup (SQL Server via Docker)

1. Start the SQL Server container:

   docker compose up -d

   This will:
   - Pull the official SQL Server 2022 image
   - Start a container on port 1433
   - Use default credentials:
     - **User**: sa
     - **Password**: `Test@1234`

## App Setup

1. Clone the repo:

   git clone https://github.com/your-org/leave-app-backend.git
   cd leave-app-backend/LeaveApp.Api/
   dotnet restore
   
2. Open LeaveApp.Api.sln

3. Update `appsettings.json` connection string (already set by default):

   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Server=localhost,1433;Database=LeaveAppDb;User Id=sa;Password=Test@1234;TrustServerCertificate=True;"
   }
