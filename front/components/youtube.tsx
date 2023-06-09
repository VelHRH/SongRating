const YoutubeEmbed = ({ embedId }: { embedId: string }) => (
 <div className="video-responsive flex w-full justify-center mb-4">
  <iframe
   width="853"
   height="480"
   src={`https://www.youtube.com/embed/${embedId}`}
   frameBorder="0"
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
   allowFullScreen
   title="Embedded youtube"
  />
 </div>
);

export default YoutubeEmbed;
