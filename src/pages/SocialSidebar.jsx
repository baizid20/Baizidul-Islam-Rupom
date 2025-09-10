import { Facebook, Github, Linkedin, Mail } from "lucide-react";

const SocialSidebar = () => {
  const socialLinks = [
    {
      href: "https://facebook.com/yourusername",
      label: "Facebook",
      icon: Facebook,
      hoverClass: "hover:text-blue-600",
    },
    {
      href: "https://github.com/yourusername",
      label: "GitHub",
      icon: Github,
      hoverClass: "hover:text-gray-800 dark:hover:text-white",
    },
    {
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
      icon: Linkedin,
      hoverClass: "hover:text-blue-500",
    },
    {
      href: "mailto:youremail@example.com",
      label: "Email",
      icon: Mail,
      hoverClass: "hover:text-red-500",
    },
  ];

  return (
    <nav
      aria-label="Social media"
      className="hidden md:flex flex-col fixed top-1/2 right-6 transform -translate-y-1/2 space-y-6 z-50"
    >
      {socialLinks.map(({ href, label, icon: Icon, hoverClass }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          className={`${hoverClass} text-gray-500 dark:text-gray-400 transition duration-200`}
          aria-label={label}
        >
          <Icon size={28} />
        </a>
      ))}
    </nav>
  );
};

export default SocialSidebar;
