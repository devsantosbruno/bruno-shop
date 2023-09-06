import { styled } from "../../styles";

export const HeaderContainer = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  maxWidth: 1180,
  padding: "2rem 0",
  margin: "0 auto",
  position: "sticky",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 99,

  "@sm": {
    padding: "1.5rem 1rem",
  },

  "@container": {
    padding: "2rem 1rem",
  },
});
