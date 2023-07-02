import { styled } from "..";

export const SuccessContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  maxWidth: 560,

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },
  p: {
    fontSize: "$xl",
    color: "$gray300",
    textAlign: "center",
    lineHeight: 1.4,
  },
  a: {
    display: "block",
    marginTop: "5rem",
    fontSize: "$lg",
    fontWeight: "bold",
    textDecoration: "none",
    color: "$green500",
    transition: "color .35s",

    "&:hover": {
      transition: "color .35s",
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 220,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  margin: "4rem 0 2rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});
