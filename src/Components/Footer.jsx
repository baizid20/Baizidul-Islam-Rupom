import { Facebook, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Copy */}
        <div className="text-center md:text-left text-gray-600 dark:text-gray-400 text-sm md:text-base">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors duration-300 cursor-pointer">
            Baizidul Islam Rupom
          </span>
          . All rights reserved.
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center space-x-6 text-gray-500 dark:text-gray-400">
          {[{
            href: "https://facebook.com/yourusername",
            label: "Facebook",
            icon: Facebook,
            hoverColor: "hover:text-blue-600"
          },{
            href: "https://github.com/yourusername",
            label: "GitHub",
            icon: Github,
            hoverColor: "hover:text-gray-800 dark:hover:text-white"
          },{
            href: "https://linkedin.com/in/yourusername",
            label: "LinkedIn",
            icon: Linkedin,
            hoverColor: "hover:text-blue-500"
          },{
            href: "mailto:youremail@example.com",
            label: "Email",
            icon: Mail,
            hoverColor: "hover:text-red-500"
          }].map(({ href, label, icon: Icon, hoverColor }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={label}
              className={`transition-colors duration-300 ${hoverColor} hover:scale-110`}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
