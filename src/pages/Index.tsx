const bgImage = "/images/loud-sugar-bg.jpg?v=3";

const Index = () => {
  return (
    <div className="relative min-h-screen flex items-start justify-center overflow-hidden">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="fixed inset-0 bg-background/40" />
      <div className="relative z-10 pt-16 md:pt-24 text-center max-w-content mx-auto px-6">
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-wide text-foreground drop-shadow-lg mb-4">
          Loud Sugar
        </h1>
        <p className="font-heading text-xl md:text-2xl text-foreground/90 italic drop-shadow-md">
          Faith, Hope, Love
        </p>
      </div>
    </div>
  );
};

export default Index;
