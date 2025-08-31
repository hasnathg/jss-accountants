export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p>© {new Date().getFullYear()} JSS &amp; Co Accountants</p>

          {/* Single line on desktop, stacked on mobile */}
          <p className="flex flex-col md:flex-row items-center gap-1 md:gap-3">
            <span>
              TEL: <a className="underline" href="tel:01753650554">01753 650554</a>
            </span>
            <span className="hidden md:inline text-gray-400" aria-hidden="true">|</span>
            <span>FAX: 01753 783798</span>
            <span className="hidden md:inline text-gray-400" aria-hidden="true">|</span>
            <span>26 Thorney Lane South, Iver, Buckinghamshire, SL0 9AE</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
