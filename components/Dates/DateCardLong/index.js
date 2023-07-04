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
import { mutate } from "swr";
import { router } from "next/router";

export default function DateCardLong({ oneDate }) {
  const date = oneDate.data;
  const [toggleSettings, setToggleSettings] = useState(false);

  const deleteDate = async (dateId) => {
    const response = await fetch(`/api/dates/${dateId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      mutate(`/api/dates/`);
    } else {
      throw new Error("Failed to delete");
    }
  };
  const handleEditClick = (id) => {
    router.push(`/date/${id}`);
  };

  const handleDeleteClick = async (event, dateId) => {
    if (event) {
      try {
        await deleteDate(dateId);
      } catch (error) {
        console.error(error);
      }
    } else {
      setToggleSettings(false);
    }
  };

  return (
    <>
      <CardContainer backgroundcolor="globalDateBackgroundColor">
        <h2>
          {date.date} | {date.time}
        </h2>
        <h3>
          {date.promptlist} {`>`} <FindPlace locationId={oneDate.location} />{" "}
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
          <h3>Termin löschen?</h3>
          <StyledCircleButton
            type="button"
            onClick={() => handleDeleteClick(true, oneDate._id)}
          >
            <StyledIconTrash color="globalNavigationPlantColor" />
          </StyledCircleButton>
          <h3>Termin bearbeiten:</h3>
          <StyledCircleButton
            type="button"
            onClick={() => handleEditClick(oneDate._id)}
          >
            <StyledIconEdit color="globalNavigationIconColor" />
          </StyledCircleButton>
        </CardContainer>
      )}
    </>
  );
}
