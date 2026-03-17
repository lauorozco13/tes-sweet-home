const bgImage = "/images/loud-sugar-bg.jpg?v=3";

const PageShell = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen py-20 md:py-28 px-6 relative">
    <div
      className="fixed inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    />
    <div className="fixed inset-0 bg-background/70" />
    <div className="max-w-content mx-auto relative z-10">{children}</div>
  </div>
);

export default PageShell;
