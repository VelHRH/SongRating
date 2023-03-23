using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SongRating.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace SongRating.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SongsController : Controller
    {
        public SongsController()
        {
        }

        [HttpGet]
        public IActionResult GetSongs()
        {

        }
    }
}
