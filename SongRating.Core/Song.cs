using MongoDB.Bson.Serialization.Attributes;

namespace SongRating.Core
{
    public class Song
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
    }
}
