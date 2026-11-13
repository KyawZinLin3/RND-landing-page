import { Mail, MapPin, Phone } from "lucide-react";

export function FooterContactDetails() {
  return <div className="footer-contact-details mt-5 grid gap-3">
    <div className="footer-contact-row whitespace-nowrap">
      <span className="footer-contact-icon shrink-0"><Phone aria-hidden="true" className="size-4" /></span>
      <span className="whitespace-nowrap"><a href="tel:+959695002653">+95 9 695 002 653</a>, <a href="tel:+9595082465">+95 9 508 246 5</a></span>
    </div>
    <a className="footer-contact-row whitespace-nowrap" href="mailto:remittance@relianceandtrustmm.com">
      <span className="footer-contact-icon shrink-0"><Mail aria-hidden="true" className="size-4" /></span>
      <span className="whitespace-nowrap">remittance@relianceandtrustmm.com</span>
    </a>
    <a className="footer-contact-row items-start" href="https://maps.app.goo.gl/snaEU1htSqjmbrc89" target="_blank" rel="noopener noreferrer">
      <span className="footer-contact-icon"><MapPin aria-hidden="true" className="size-4" /></span>
      <address className="not-italic">No. B-7, Taw Win Road, 4 Quarter, 9 Mile, Mayangone Township, Yangon Region, Myanmar</address>
    </a>
  </div>;
}

