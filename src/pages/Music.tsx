import PageShell from "@/components/PageShell";
import logoSpotify from "@/assets/logo-spotify.png";
import logoAppleMusic from "@/assets/logo-apple-music.png";
import logoYoutubeMusic from "@/assets/logo-youtube-music.png";
import logoAmazonMusic from "@/assets/logo-amazon-music.png";

const platforms = [
  { name: "Spotify", logo: logoSpotify, url: "https://open.spotify.com" },
  { name: "Apple Music", logo: logoAppleMusic, url: "https://music.apple.com" },
  { name: "YouTube Music", logo: logoYoutubeMusic, url: "https://music.youtube.com" },
  { name: "Amazon Music", logo: logoAmazonMusic, url: "https://music.amazon.com" },
];

const Music = () => {
  return (
    <PageShell>
      <h1 className="font-heading text-4xl md:text-5xl font-bold mb-10">Music</h1>
      <p className="text-foreground/85 font-body leading-relaxed mb-12">
        Listen to Loud Sugar on your favorite platform.
      </p>
      <div className="grid grid-cols-2 gap-6 md:gap-8">
        {platforms.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 p-6 md:p-8 bg-background/30 border border-border/30 hover:border-primary/40 transition-all duration-300"
          >
            <img
              src={p.logo}
              alt={p.name}
              className="w-16 h-16 md:w-20 md:h-20 object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-heading text-lg md:text-xl text-foreground/80 group-hover:text-primary transition-colors duration-200">
              {p.name}
            </span>
          </a>
        ))}
      </div>
    </PageShell>
  );
};

export default Music;
