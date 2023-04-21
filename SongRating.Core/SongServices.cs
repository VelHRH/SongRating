using System;
using System.Collections.Generic;

namespace SongRating.Core
{
    public class SongServices : ISongServices
    {
        public List<Song> GetSongs()
        {
            return new List<Song>
            {
                new Song
                {
                    Name = "Test",
                    Author = "TestTest"
                }
            };
        }
    }
}
