import Image from "next/image";
import loader from "../images/loader.svg";
import loading from "../app/loading.module.css";

export default function Loading() {
  return (
    <>
      <h3>Loading</h3>
      <Image
        className={loading.element}
        src={loader}
        alt="404"
        width={90}
        height={90}
      />
    </>
  );
}
