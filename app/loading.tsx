import Image from "next/image";
import loader from "./src/images/loader.svg";
import loading from "./loading.module.css";

export default function Loading() {
  return (
    <div className={loading.container}>
      <Image
        className={loading.element}
        src={loader}
        alt="404"
        width={90}
        height={90}
      />
      <h3 className={loading.title}>Запрос обрабатывается!</h3>
    </div>
  );
}
