export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} JSS &amp; Co Accountants</p>
          <p>Slough, UK · +44 XXXX XXX XXX · info@jssaccountants.co.uk</p>
        </div>
      </div>
    </footer>
  );
}
