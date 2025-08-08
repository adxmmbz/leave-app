using LeaveApp.Api.Models;

namespace LeaveApp.Api.Data;

public static class DbSeeder
{
    public static void Seed(AppDbContext context)
    {
        if (!context.Users.Any())
        {
            context.Users.AddRange(
                new User { Username = "john.doe", Role = "Employee" },
                new User { Username = "admin.user", Role = "Admin" }
            );
            context.SaveChanges();
        }
    }
}
