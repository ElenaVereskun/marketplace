import Image from "next/image";
import ImageNotFound from "./src/images/not-found.png";

export default function NotFound() {
  return (
    <>
      <Image src={ImageNotFound} alt="404" width={794} height={794} />
    </>
  );
}
