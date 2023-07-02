import { styled } from "..";

export const HomeContainer = styled("main", {
  minHeight: "100vh",
  width: "100vw",
});

export const SliderContainer = styled("div", {
  display: "flex",
  width: "100%",
  marginLeft: "auto",
  minHeight: 600,
});

export const Product = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  position: "relative",
  overflow: "hidden",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },

  a: {
    position: "absolute",
    inset: 0,
  },

  footer: {
    "@media (min-width: 960px)": {
      transform: "translateY(110%)",
      opacity: 0,
      transition: "all 0.35s ease-in-out",
    },
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",

    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    background: "rgba(0,0,0, 0.6)",

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

  "@media (min-width: 960px)": {
    "&:hover": {
      footer: {
        transform: "translateY(0%)",
        opacity: 1,
      },
    },
  },
});
