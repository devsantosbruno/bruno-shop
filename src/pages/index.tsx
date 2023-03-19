import { styled } from "../styles";

const Button = styled("button", {
  backgroundColor: "$rocketseat",
  borderRadius: 8,
  cursor: "pointer",
});

export default function Home() {
  return (
    <>
      <Button>Enviar</Button>
    </>
  );
}
