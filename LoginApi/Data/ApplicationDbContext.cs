using LoginApi.Model;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace LoginApi.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}
