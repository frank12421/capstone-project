import {
  CardContainer,
  CardInfoLinkButton,
} from "@/components/Card/Card.Styling";
import FindPlace from "@/components/Places/FindPlace";
import TranslateDateSeries from "../TranslateDateSeries";
import { StyledCircleButton } from "@/components/Styling/StyledButton";
import { StyledIconSettings } from "@/components/Styling/StyledIcon";
import { useState } from "react";
import { mutate } from "swr";
import { router } from "next/router";
import { StyledSubCardContainer } from "@/components/Styling/StyledSubCard";
import { SubCardDelete } from "@/components/SubCards/SubCardDelete";
import { SubCardEdit } from "@/components/SubCards/SubCardEdit";

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
        {toggleSettings && (
          <StyledSubCardContainer>
            <SubCardDelete
              onClick={() => handleDeleteClick(true, oneDate._id)}
              color="globalDateBackgroundColor"
              backgroundcolor="globalNavigationBackgroundColor"
            >
              Termin löschen
            </SubCardDelete>

            <SubCardEdit
              onClick={() => handleEditClick(oneDate._id)}
              color="globalPlantBackgroundColor"
              backgroundcolor="globalNavigationPlantColor"
            >
              Termin bearbeiten
            </SubCardEdit>
          </StyledSubCardContainer>
        )}
      </CardContainer>
    </>
  );
}
