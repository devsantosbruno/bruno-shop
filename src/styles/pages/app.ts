import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled("header", {
  padding: "2rem 0",
  width: "80vw",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const ButtonCart = styled("button", {
  background: "$gray800",
  border: "none",
  outline: "none",
  padding: "0.75rem",
  borderRadius: 6,
  cursor: "pointer",
  position: "relative",
});

export const QuantityNotification = styled("span", {
  background: "$green300",
  position: "absolute",
  top: "-0.5rem",
  right: "-0.5rem",
  borderRadius: 100,
  minWidth: "1.5rem",
  minHeight: "1.5rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontSize: "0.875rem",
  fontWeight: "bold",
  color: "$white",
});
