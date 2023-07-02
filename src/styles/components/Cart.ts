import { styled } from "..";
import { keyframes } from "@stitches/react";
import * as Dialog from "@radix-ui/react-dialog";

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

// Dialog
export const AnimationContentShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const DialogContent = styled(Dialog.Content, {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  width: "33.33vw",
  maxWidth: "33rem",
  minHeight: "100vh",
  padding: "3rem",

  backgroundColor: "$gray800",
  boxShadow: "-4px 0px 30px 0px rgba(0, 0, 0, 0.80)",
  animation: `${AnimationContentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  "&:focus": { outline: "none" },
  // overflowY: "auto",
});

export const CloseContainer = styled("div", {
  textAlign: "end",

  svg: {
    cursor: "pointer",
  },
});

export const DialogTitle = styled(Dialog.Title, {
  fontSize: "$lg",
  fontWeight: "bold",
  color: "$gray100",

  marginBottom: "1.8rem",
});

// Product
export const ProductsList = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.45rem",
  height: "calc(100vh - 400px)",
  overflowY: "auto",
});
export const Product = styled("div", {
  display: "flex",
  alignItems: "stretch",
  gap: "1.25rem",
});
export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 102,
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
export const ProductDetails = styled("div", {
  gap: "1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});
export const ProductName = styled("span", {
  display: "block",
  fontSize: "$md",
  color: "$gray300",
  lineHeight: "160%",
});
export const ProductPrice = styled("strong", {
  display: "block",
  fontSize: "$md",
  color: "$gray100",
});
export const ProductRemove = styled("button", {
  fontSize: "1rem",
  fontWeight: "bold",
  color: "$green500",
  cursor: "pointer",
  background: "none",
  outline: "none",
  border: "none",
});

export const ShoppingDetail = styled("div", {
  display: "flex",
  gap: 8,
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "0.20rem",
});
export const QuantityKey = styled("span", {
  fontSize: "1rem",
  color: "$gray100",
});
export const QuantityValue = styled("span", {
  fontSize: "$md",
  color: "$gray100",
});

export const ValueKey = styled("strong", {
  fontSize: "$md",
  color: "$gray100",
});
export const ValueValue = styled("strong", {
  fontSize: "$xl",
  color: "$gray100",
});

export const FinishShopping = styled("button", {
  background: "$green500",
  width: "100%",
  border: 0,
  color: "$white",
  borderRadius: 8,
  padding: "1.25rem",
  marginTop: "3.45rem",
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
});
