"use client";

import dynamic from "next/dynamic";

const MapLeaflet = dynamic(() => import("./MapLeaflet"), { ssr: false });

// Your business details
const NAME = "JSS & Co Accountants";
const ADDRESS = "26 Thorney Lane South, Iver, Buckinghamshire, SL0 9AE";
const TEL_DISPLAY = "01753 650554";
const TEL_LINK = "01753650554"; // for tel:
const FAX_DISPLAY = "01753 783798";

// Approx centre near Iver/Richings Park — adjust later if needed
const LAT = 51.5086;
const LNG = -0.5049;

export default function MapOffice() {
  return (
    <section className="section bg-slate-50 border-t border-black/5">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left: office info */}
        <div>
          <p className="text-amber-600 font-semibold uppercase tracking-wide">Visit us</p>
          <h2 className="section-title text-gray-950">Office &amp; hours</h2>

          <address className="not-italic mt-4 text-gray-700">
            <strong className="block text-gray-900">{NAME}</strong>
            <span className="block">{ADDRESS}</span>
            <span className="block mt-2">
              TEL: <a className="underline" href={`tel:${TEL_LINK}`}>{TEL_DISPLAY}</a>
            </span>
            <span className="block">FAX: {FAX_DISPLAY}</span>
          </address>

          <ul className="mt-6 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />
              <span><strong>Mon–Fri:</strong> 9:00 – 17:30</span>
            </li>
            <li className="flex items-center gap-2 mt-1">
              <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />
              <span><strong>Sat–Sun:</strong> by appointment</span>
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-tl-2xl rounded-br-2xl bg-amber-500 text-slate-900 hover:bg-amber-400"
            >
              Get directions
            </a>
            <a
              href="/contact"
              className="px-5 py-2 rounded-tl-2xl rounded-br-2xl bg-white text-gray-900 border hover:bg-gray-50"
            >
              Book a call
            </a>
          </div>
        </div>

        {/* Right: map */}
        {/* Pass the coords/address to the map for marker + popup */}
        <MapLeaflet lat={LAT} lng={LNG} name={NAME} address={ADDRESS} tel={TEL_DISPLAY} />
      </div>
    </section>
  );
}
