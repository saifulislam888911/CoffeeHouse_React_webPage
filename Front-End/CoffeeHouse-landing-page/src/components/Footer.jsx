import { useMemo } from "react";

function Footer() {
  const quickLinks = useMemo(
    () => [
      { label: "Home", href: "#home" },
      { label: "Menu", href: "#menu" },
      { label: "About", href: "#about" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" }
    ],
    []
  )

  const contactInfo = [
    { icon: "📍", text: "House 12, Road 5, Khilgaon, Dhaka 1219" },
    { icon: "📞", text: "+880 1712-456789" },
    { icon: "✉️", text: "hello@coffeehousebd.com" }
  ]

  const socials = [
    { icon: "🌐", label: "Website", href: "https://coffeehousebd.com" },
    { icon: "📸", label: "Instagram", href: "https://instagram.com" },
    { icon: "📘", label: "Facebook", href: "https://facebook.com" }
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="container mx-auto max-w-6xl grid gap-10 md:grid-cols-3">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-amber-400">Coffee House</h3>
          <p className="text-gray-400 leading-relaxed">
            Crafting soulful brews in Dhaka since 2010. Your neighborhood spot for specialty coffee,
            slow mornings, and heartfelt conversations.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Stay Connected</h4>
          <div className="space-y-2">
            {contactInfo.map((info) => (
              <p key={info.text} className="flex items-start gap-3 text-gray-400">
                <span>{info.icon}</span>
                {info.text}
              </p>
            ))}
          </div>
          <div className="flex gap-4 pt-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 hover:border-amber-400 hover:text-amber-400 transition-colors duration-200"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Coffee House Dhaka. All rights reserved.</p>
        <p className="mt-2">Brewed with ❤️ and endless ☕</p>
      </div>
    </footer>
  )
}

export default Footer

