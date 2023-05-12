import Image from "next/image.js";
import { StyledLink } from "@/components/StyledButton";

export default function HomePage() {
  return (
    <main>
      <h1>Hello from Grow Green</h1>
      <Image
        width="350"
        height="150"
        alt="Pflanze"
        src={"/pictures/Header-Home.png"}
        style={{ objectFit: "contain" }}
      />
      <StyledLink color="darkgreen" href="/lists/plantlist">
        Alle Pflanzen anzeigen
      </StyledLink>

      <StyledLink color="darkred" href="/lists/placelist">
        Alle Standorte anzeigen
      </StyledLink>
    </main>
  );
}
