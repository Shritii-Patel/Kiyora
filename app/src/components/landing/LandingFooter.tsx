import Image from "next/image";
import Link from "next/link";

export function LandingFooter() {
  return (
    <footer className="w-full bg-[#fbf9f8] border-t border-[#e9e8e7] py-8">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2.5">
            <Image
              src="/stitch/logo.svg"
              alt="Kiyora Minimal Geometric Logo"
              width={24}
              height={24}
              className="h-6 w-auto object-contain"
            />
            <span className="text-[16px] font-semibold text-[#1b1c1c] tracking-tight">Kiyora</span>
          </div>
          <p className="text-[13px] text-[#5f5e5e]">
            Privacy-preserving credential verification on Midnight.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <nav className="flex flex-wrap items-center gap-6" aria-label="Footer navigation">
            <Link href="/#product" className="text-[13px] text-[#5f5e5e] hover:text-[#1b1c1c] transition-colors">
              Product
            </Link>
            <Link href="/#how-it-works" className="text-[13px] text-[#5f5e5e] hover:text-[#1b1c1c] transition-colors">
              How it works
            </Link>
            <Link href="/#privacy" className="text-[13px] text-[#5f5e5e] hover:text-[#1b1c1c] transition-colors">
              Privacy
            </Link>
            <a
              href="https://github.com/Shritii-Patel/Kiyora"
              target="_blank"
              rel="noreferrer"
              className="text-[13px] text-[#5f5e5e] hover:text-[#1b1c1c] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://docs.midnight.network"
              target="_blank"
              rel="noreferrer"
              className="text-[13px] text-[#5f5e5e] hover:text-[#1b1c1c] transition-colors"
            >
              Midnight
            </a>
          </nav>
          <span className="font-mono text-[12px] text-[#8b8a84]">© 2026 Kiyora.</span>
        </div>
      </div>
    </footer>
  );
}
