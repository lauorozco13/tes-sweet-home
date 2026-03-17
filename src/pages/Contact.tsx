import PageShell from "@/components/PageShell";

const Contact = () => {
  return (
    <PageShell>
      <h1 className="font-heading text-4xl md:text-5xl font-bold mb-10">Contact</h1>
      <div className="space-y-6 text-foreground/85 font-body leading-relaxed">
        <p>For booking inquiries, press, or general questions, reach out to the band.</p>
        <div className="flex flex-col gap-3 font-heading text-xl">
          <a href="mailto:hello@loudsugar.com" className="text-foreground/70 hover:text-primary transition-colors duration-200">hello@loudsugar.com</a>
        </div>
        <div className="flex flex-col gap-3 font-heading text-lg mt-10">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors duration-200">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors duration-200">Facebook</a>
        </div>
      </div>
    </PageShell>
  );
};

export default Contact;
