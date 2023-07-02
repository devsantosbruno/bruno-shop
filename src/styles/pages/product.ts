import { styled } from "..";

export const Main = styled("main", {
  minHeight: "80vh",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "3rem 0",
});

export const ProductContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
  alignItems: "stretch",
  gap: "4rem",

  maxWidth: "80vw",
  margin: "0 auto",
});

export const ImageContainer = styled("div", {
  width: "100%",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const ButtonBuy = styled("button", {
  marginTop: 120,
});

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "4rem",

  h1: {
    fontSize: "$2xl",
    color: "$gray300",
  },

  span: {
    marginTop: "1rem",
    display: "block",
    fontSize: "$2xl",
    color: "$green300",
  },

  p: {
    marginTop: "2.5rem",
    fontSize: "$md",
    lineHeight: 1.6,
    color: "$gray300",
  },

  button: {
    marginTop: "auto",
    background: "$green500",
    border: 0,
    color: "$white",
    borderRadius: 8,
    padding: "1.25rem",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "$md",
    transition: "background .35s",

    "&:not(:disabled):hover": {
      background: "$green300",
      transition: "background .35s",
    },

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },
  },
});
