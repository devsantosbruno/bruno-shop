import Link from "next/link";
import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  minHeight: "100vh",
  paddingLeft: "20vw",
  paddingRight: "20vw",
  paddingBottom: "2rem",

  "@notebook": {
    minHeight: "calc(100vh - 120px)",
  },
});

export const Product = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465e4 100%)",
  borderRadius: 8,
  cursor: "pointer",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "2rem",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 6,

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    ">div": {
      display: "flex",
      flexDirection: "column",

      strong: {
        fontSize: "$lg",
        color: "$gray100",
      },

      span: {
        fontSize: "$xl",
        fontWeight: "bold",
        color: "$green300",
      },
    },

    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "56px",
      height: "56px",
      border: "none",
      background: "$green500",
      borderRadius: "6px",
      cursor: "pointer",

      "&:disabled": {
        opacity: 0.7,
        cursor: "not-allowed",
      },
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },

    "@container": {
      footer: {
        opacity: 0,
      },
    },
  },
});

export const LinkToProduct = styled(Link, {
  position: "absolute",
  inset: 0,
});
