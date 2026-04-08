import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "This is a home edit message to see if this works" },
  { to: "/about", label: "About Loud Sugar" },
  { to: "/band", label: "Band Loud Sugar" },
  { to: "/music", label: "Music Loud Sugar" },
  { to: "/media", label: "Media Loud Sugar" },
  { to: "/contact", label: "Contact Loud Sugar" },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-6 left-6 z-50 flex flex-col gap-1 font-heading text-lg md:text-xl drop-shadow-lg">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`transition-colors duration-200 ${
            location.pathname === item.to ||
            (item.to !== "/" && location.pathname.startsWith(item.to))
              ? "text-primary"
              : "text-foreground/70 hover:text-primary"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default BottomNav;
