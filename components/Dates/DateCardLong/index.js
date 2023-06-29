import {
  CardContainer,
  CardInfoLinkButton,
} from "@/components/Card/Card.Styling";
import FindPlace from "@/components/Places/FindPlace";
import TranslateDateSeries from "../TranslateDateSeries";
import { StyledCircleButton } from "@/components/Styling/StyledButton";
import {
  StyledIconEdit,
  StyledIconSettings,
  StyledIconTrash,
} from "@/components/Styling/StyledIcon";
import { useState } from "react";

export default function DateCardLong({ date, location }) {
  const [toggleSettings, setToggleSettings] = useState(false);

  return (
    <>
      <CardContainer backgroundcolor="globalDateBackgroundColor">
        <h2>
          {date.date} | {date.time}
        </h2>
        <h3>
          {date.promptlist} {`>`} <FindPlace locationId={location} />{" "}
        </h3>
        <TranslateDateSeries
          form={date.dateform}
          frequency={date.datefrequency}
        />
        <span>
          Notiz:
          {date.description}
        </span>
        <CardInfoLinkButton>
          <StyledCircleButton
            onClick={() => setToggleSettings(!toggleSettings)}
          >
            <StyledIconSettings />
          </StyledCircleButton>
        </CardInfoLinkButton>
      </CardContainer>
      {toggleSettings && (
        <CardContainer
          backgroundcolor="globalDateBackgroundColor"
          //ref={confirmationRef}
        >
          <h3>Standort löschen?</h3>
          <StyledCircleButton
            type="button"
            //onClick={() => handleDeleteClick(true, place._id)}
          >
            <StyledIconTrash color="globalNavigationPlantColor" />
          </StyledCircleButton>
          <h3>Standort bearbeiten:</h3>
          <StyledCircleButton
            type="button"
            //onClick={() => handleEditClick(place._id)}
          >
            <StyledIconEdit color="globalNavigationIconColor" />
          </StyledCircleButton>
        </CardContainer>
      )}
    </>
  );
}
