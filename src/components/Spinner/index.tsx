import SpinnerImg from "../../assets/spinner.svg";
import Image from "next/image";

export function Spinner() {
  return (
    <div>
      <Image src={SpinnerImg} alt="Spinner" width={40} height={40} />
    </div>
  );
}
