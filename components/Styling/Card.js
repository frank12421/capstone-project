import styled from "styled-components";
import Link from "next/link.js";

export const StyledCard = styled.section`
  width: 95%;
  min-height: 50px;
  height: auto;
  background-color: ${(props) => `var(--${props.backgroundcolor})`};
  color: var(--globalLightColor);
  box-shadow: var(--globalBorderShadow);
  border-radius: 1rem;
  padding: 0.8rem 1rem;
  display: flex;
  flex-direction: column;
`;

export const StyledContentRowContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const StyledCardList = styled.ul`
  width: 100%;
  margin: 0;
  list-style: none;
`;
export const StyledCardListItem = styled.li`
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
`;

export const StyledCardFooter = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StyledCardColumnContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ margintop }) => margintop};
`;

export const StyledBigFigure = styled.p`
  margin: 0;
  font-size: 3rem;
  padding: 0;
  justify-self: end;
`;

export const StyledBigText = styled.p`
  margin: 0;
  font-size: 1.5rem;
`;

export const StyledGridContainer = styled.section`
  width: 80%;
  display: grid;
  grid-template-columns: 90% 10%;
  align-items: center;
`;

export const InfoLinkContainer = styled(Link)`
  width: 95%;
  min-height: 50px;
  height: auto;
  background-color: ${(props) => `var(--${props.backgroundcolor})`};
  color: var(--globalLightColor);
  box-shadow: var(--globalBorderShadow);
  border-radius: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
`;

export const NewCardContainer = styled.section`
  width: 95%;
  min-height: 50px;
  padding: 5px;
  height: auto;
  background-color: ${(props) => `var(--${props.backgroundcolor})`};
  color: var(--globalLightColor);
  box-shadow: var(--globalBorderShadow);
  border-radius: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
`;

export const InfoLinkContainerContent = styled.div`
  width: 100%;
  margin: 0;
  padding: 0 0.8rem //
;
`;

export const InfoLinkContainerButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 5px;
  z-index: 1;
`;

export const CardContenGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 1rem;
  margin: 0;
`;
