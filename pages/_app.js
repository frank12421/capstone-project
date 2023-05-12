import GlobalStyle from "../styles";
import { useState } from "react";
import { defaultplaces } from "@/db/db";

export default function App({ Component, pageProps }) {
  const [places, setPlaces] = useState(defaultplaces);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} places={places} setPlaces={setPlaces} />
    </>
  );
}
