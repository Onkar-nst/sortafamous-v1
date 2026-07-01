export function Footer() {
  return (
    <footer className="relative z-[130] bg-ink text-cream">
      <div className="mx-auto max-w-[1480px] px-6 py-16 grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
        <div>
          <img
            src="/logo-mark.png"
            alt="Sorta Famous"
            className="h-10 w-auto select-none"
            draggable={false}
          />
          <p className="text-cream/60 text-sm mt-4 max-w-xs">
            PR & strategic communications agency — visibility that earns its keep.
          </p>
        </div>
        <div>
          <div className="eyebrow text-cream/60 mb-4">Company</div>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow text-cream/60 mb-4">Follow</div>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">X / Twitter</a></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow text-cream/60 mb-4">Studio</div>
          <ul className="space-y-2 text-sm text-cream/80">
            <li>Mumbai, India</li>
            <li>hellothere@sortafamous.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-[1480px] px-6 py-6 flex flex-wrap justify-between text-xs text-cream/50 gap-4">
          <div>© 2026 Sorta Famous · All rights reserved</div>
          <div>Made with intention.</div>
        </div>
      </div>
    </footer>
  );
}
