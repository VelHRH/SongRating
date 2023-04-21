using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SongRating.Core;
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
        public readonly ISongServices _songServices;
        public SongsController(ISongServices songServices)
        {
            _songServices = songServices;
        }

        [HttpGet]
        public IActionResult GetSongs()
        {
            return Ok(_songServices.GetSongs());
        }
    }
}
