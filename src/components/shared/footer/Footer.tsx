import { X } from "lucide-react";
import Link from "next/link";
import { BsInstagram, BsTwitterX} from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";

const exploreLinks = [
  { label: "All Destinations", href: "#" },
  { label: "Bali Paradise", href: "#" },
  { label: "Sajek Valley", href: "#" },
  { label: "Saint Martin Island", href: "#" },
  { label: "Tour Packages", href: "#" },
];

const companyLinks = [
  { label: "Our Story", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Traveler Reviews", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const legalLinks = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Cookie Settings", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0d1f30] to-[#081420] px-[8vw] pt-18 text-[#eef3f5] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-teal-400/50 before:to-transparent">
      {/* ambient glow, echoes the hero's sea horizon */}
      <div
        className="pointer-events-none absolute -top-24 left-[15%] h-[400px] w-[1200px] rounded-full bg-teal-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:gap-12">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="mb-4 font-serif text-2xl font-semibold tracking-tight">
            Elevate <span className="text-teal-400">Journeys</span>
          </p>
          <p className="mb-6 max-w-xs text-sm leading-relaxed text-slate-400">
            Trusted by 15,000+ travelers worldwide. Expert guides, seamless
            booking, and memories that last a lifetime.
          </p>
          <div className="flex gap-3">
            <SocialIcon href="#" label="Facebook">
              <FaFacebook className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href="#" label="Instagram">
              <BsInstagram className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href="#" label="Twitter/X">
              <BsTwitterX className="h-4 w-4" />
            </SocialIcon>
          </div>
        </div>

        {/* Explore */}
        <FooterColumn title="Explore" links={exploreLinks} />

        {/* Company */}
        <FooterColumn title="Company" links={companyLinks} />

        {/* Newsletter */}
        <div>
          <h4 className="mb-5 font-serif text-lg italic font-medium text-teal-200">
            Stay in the Loop
          </h4>
          <p className="mb-4 text-sm leading-relaxed text-slate-400">
            New destinations and exclusive offers, straight to your inbox.
          </p>
          <form
            
            className="flex rounded-full border border-white/10 bg-white/[0.02] p-1.5"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full flex-1 bg-transparent px-4 py-2.5 text-sm text-[#eef3f5] outline-none placeholder:text-slate-500"
            />
            <button
              type="submit"
              className="whitespace-nowrap rounded-full bg-teal-400 px-5 py-2.5 text-sm font-semibold text-[#081420] transition-colors hover:bg-teal-300"
            >
              Subscribe
            </button>
          </form>
          <div className="mt-5 flex flex-wrap gap-4">
            <Badge label="Free Cancellation" />
            <Badge label="24/7 Support" />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col items-start gap-3 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Elevate Journeys. All rights reserved.
        </p>
        <div className="flex gap-6">
          {legalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-slate-500 transition-colors hover:text-teal-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="mb-5 font-serif text-lg italic font-medium text-teal-200">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-slate-400 transition-all hover:pl-1 hover:text-[#eef3f5]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9.5 w-9.5 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all hover:-translate-y-0.5 hover:border-teal-400 hover:bg-teal-400 hover:text-[#081420]"
    >
      {children}
    </a>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-1.5 text-xs text-slate-400">
      <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
      {label}
    </span>
  );
}