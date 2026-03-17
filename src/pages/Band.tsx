import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";

const members = [
  { slug: "david-grover", name: "David Grover" },
  { slug: "eddie-bydalek", name: "Eddie Bydalek" },
  { slug: "steven-hitselberger", name: "Steven Hitselberger" },
  { slug: "william-hitselberger", name: "William Hitselberger" },
  { slug: "harry-mccarthy", name: "Harry McCarthy" },
];

const Band = () => {
  return (
    <PageShell>
      <h1 className="font-heading text-4xl md:text-5xl font-bold mb-10">The Band</h1>
      <nav className="flex flex-col gap-4">
        {members.map((m) => (
          <Link
            key={m.slug}
            to={`/band/${m.slug}`}
            className="font-heading text-2xl md:text-3xl text-foreground/80 hover:text-primary transition-colors duration-200"
          >
            {m.name}
          </Link>
        ))}
      </nav>
    </PageShell>
  );
};

export default Band;
