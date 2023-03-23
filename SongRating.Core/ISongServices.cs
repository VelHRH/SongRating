using System.Collections.Generic;

namespace SongRating.Core
{
    interface ISongServices
    {
        List<Song> GetSongs();
    }
}
