import Image from "next/image";
import React from "react";

function SponsorCard() {
  return (
    <section className="max-w-7xl mx-auto flex justify-center py-8 md:gap-24 gap-2">
      <Image
        src="/sponsors/1.png" 
        alt="Sponsor Logo"
        width={40}
        height={40}
        className="object-contain"
      />
      <Image
        src="/sponsors/2.png" 
        alt="Sponsor Logo"
        width={40}
        height={40}
        className="object-contain"
      />
      <Image
        src="/sponsors/3.png" 
        alt="Sponsor Logo"
        width={40}
        height={40}
        className="object-contain"
      />
      <Image
        src="/sponsors/4.png" 
        alt="Sponsor Logo"
        width={40}
        height={40}
        className="object-contain"
      />
      <Image
        src="/sponsors/5.png" 
        alt="Sponsor Logo"
        width={40}
        height={40}
        className="object-contain"
      />
      <Image
        src="/sponsors/6.png" 
        alt="Sponsor Logo"
        width={40}
        height={40}
        className="object-contain"
      />
    </section>
  );
}

export default SponsorCard;
