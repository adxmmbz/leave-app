using LeaveApp.Api.Data;
using LeaveApp.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LeaveApp.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LeaveRequestsController(AppDbContext context) : ControllerBase
{
    // GET: api/leaveRequests
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var leaves = await context.LeaveRequests
            .Include(l => l.User)
            .ToListAsync();

        return Ok(leaves);
    }

    // POST: api/leaveRequests
    [HttpPost]
    public async Task<IActionResult> Create(LeaveRequest request)
    {
        // Optional: Validate request.UserId exists
        var user = await context.Users.FindAsync(request.UserId);
        if (user == null)
            return NotFound("User not found");

        request.Status = "Pending";
        context.LeaveRequests.Add(request);
        await context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetAll), new { id = request.Id }, request);
    }

    // PUT: api/leaveRequests/{id}/approve
    [HttpPut("{id}/approve")]
    public async Task<IActionResult> Approve(int id)
    {
        var leave = await context.LeaveRequests.FindAsync(id);
        if (leave == null)
            return NotFound();

        leave.Status = "Approved";
        await context.SaveChangesAsync();

        return NoContent();
    }

    // PUT: api/leaveRequests/{id}/reject
    [HttpPut("{id}/reject")]
    public async Task<IActionResult> Reject(int id)
    {
        var leave = await context.LeaveRequests.FindAsync(id);
        if (leave == null)
            return NotFound();

        leave.Status = "Rejected";
        await context.SaveChangesAsync();

        return NoContent();
    }
}
