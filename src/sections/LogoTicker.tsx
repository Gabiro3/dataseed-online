import Image from "next/image";
import Logo1 from "@/assets/logo-acme.png"
import Logo2 from "@/assets/logo-celestial.png"
import Logo3 from "@/assets/logo-echo.png"
import Logo4 from "@/assets/logo-pulse.png"
import Logo5 from "@/assets/logo-apex.png"
import Logo6 from "@/assets/logo-quantum.png"

export const LogoTicker = () => {
  return <div className="py-8 md:py-12 bg-white">
    <div className="container">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
      <div className="flex gap-14 flex-none">
        <Image src={Logo1} alt="logo" className="logo-ticker-image"/>
        <Image src={Logo2} alt="logo" className="logo-ticker-image"/>
        <Image src={Logo3} alt="logo" className="logo-ticker-image"/>
        <Image src={Logo4} alt="logo" className="logo-ticker-image"/>
        <Image src={Logo5} alt="logo" className="logo-ticker-image"/>
        <Image src={Logo6} alt="logo" className="logo-ticker-image"/>
      </div>
      </div>

    </div>
  </div>;
};
