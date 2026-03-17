import PageShell from "@/components/PageShell";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const videos = [
  { id: "NhdVNuRJWNk", title: "Video 1" },
  { id: "EKlWFQZ3p0Q", title: "Video 2" },
  { id: "PYCWb11uwVk", title: "Video 3" },
  { id: "HmMh5ZtRUmE", title: "Video 4" },
  { id: "ZA9j3nOFTnE", title: "Video 5" },
];

const Media = () => {
  return (
    <PageShell>
      <h1 className="font-heading text-4xl md:text-5xl font-bold mb-10">Media</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {videos.map((video) => (
          <AspectRatio key={video.id} ratio={16 / 9} className="overflow-hidden rounded-lg border border-border/30 bg-black/50">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </AspectRatio>
        ))}
      </div>
    </PageShell>
  );
};

export default Media;
