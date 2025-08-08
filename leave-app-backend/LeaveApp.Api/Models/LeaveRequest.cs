using System.ComponentModel.DataAnnotations;

namespace LeaveApp.Api.Models;

public class LeaveRequest
{
    public int Id { get; set; }

    [Required]
    public int UserId { get; set; }

    [Required]
    public string Type { get; set; } = null!; // e.g., "Sick", "Annual"

    public string? Reason { get; set; }

    [Required]
    public DateTime StartDate { get; set; }

    [Required]
    public DateTime EndDate { get; set; }

    public string Status { get; set; } = "Pending"; // Pending, Approved, Rejected

    public User? User { get; set; }
}
