import { useParams, Link } from "react-router-dom";
import PageShell from "@/components/PageShell";

const memberData: Record<string, { name: string; role: string; bio: string }> = {
  "david-grover": { name: "David Grover", role: "Vocals / Guitar", bio: "David brings a warm, commanding presence to the front of every Loud Sugar performance. His songwriting draws from deep wells of personal faith and storytelling tradition, weaving narratives that feel both intimate and universal." },
  "eddie-bydalek": { name: "Eddie Bydalek", role: "Guitar", bio: "Eddie's guitar work defines much of Loud Sugar's textural landscape — from shimmering clean tones to walls of overdriven color. He approaches every song as an architect, building structures of sound that support and elevate." },
  "steven-hitselberger": { name: "Steven Hitselberger", role: "Bass", bio: "Steven holds the low end with a groove-first philosophy. His playing is the foundation the rest of the band builds upon — steady, inventive, and always in service of the song." },
  "william-hitselberger": { name: "William Hitselberger", role: "Drums", bio: "William is the heartbeat of Loud Sugar. His drumming balances power with subtlety, knowing exactly when to drive the band forward and when to pull back and let the music breathe." },
  "harry-mccarthy": { name: "Harry McCarthy", role: "Keys / Vocals", bio: "Harry adds harmonic depth and melodic sweetness through his keyboard work and vocal harmonies. His musical instincts bring an extra dimension to the band's sonic palette." },
};

const BandMember = () => {
  const { slug } = useParams<{ slug: string }>();
  const member = slug ? memberData[slug] : null;

  if (!member) {
    return (
      <PageShell>
        <p className="text-muted-foreground">Member not found.</p>
        <Link to="/band" className="text-primary mt-4 inline-block">Back to Band</Link>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <Link to="/band" className="text-muted-foreground hover:text-primary text-sm font-body mb-8 inline-block transition-colors duration-200">Back to Band</Link>
      <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2">{member.name}</h1>
      <p className="font-heading text-xl text-primary italic mb-10">{member.role}</p>
      <p className="text-foreground/85 font-body leading-relaxed">{member.bio}</p>
    </PageShell>
  );
};

export default BandMember;
