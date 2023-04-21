using System.Collections.Generic;

namespace SongRating.Core
{
    public interface ISongServices
    {
        List<Song> GetSongs();
    }
}
