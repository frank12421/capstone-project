import GlobalStyle from "../styles";
import { useState } from "react";
import { defaultplaces } from "@/db/db";
import { defaultdates } from "@/db/db";
import { useImmer } from "use-immer";

export default function App({ Component, pageProps }) {
  const [places, setPlaces] = useState(defaultplaces);
  const [dates, setDates] = useImmer(defaultdates);
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        places={places}
        setPlaces={setPlaces}
        dates={dates}
        setDates={setDates}
      />
    </>
  );
}
