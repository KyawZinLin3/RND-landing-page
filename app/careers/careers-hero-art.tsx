import Image from "next/image";

export default function CareersHeroArt() {
  return <div className="careers-hero-art">
    <div className="careers-hero-glow" aria-hidden="true" />
    <Image
      src="/careers-hr-team.png"
      alt="Three Burmese women on the Reliance and Trust team, ready to welcome new colleagues"
      width={1472}
      height={1088}
      priority
      className="careers-hr-image"
    />
    <div className="careers-hiring-badge">
      <span className="careers-hiring-logo"><Image src="/rt-logo.svg" alt="Reliance and Trust" width={48} height={48} /></span>
      <span className="careers-hiring-copy"><small>R&amp;T Careers</small><strong>We’re hiring</strong><span>Join our team</span></span>
    </div>
  </div>;
}
