import Image from "next/image";
import { key1 } from '../app/constants'
import loading from "./loading.module.css";
import Result from "./waiting/components/result";

export default function Loading() {
  return (
    <div className={loading.container}>
      {/*       <Image
        className={loading.element}
        src={loader}
        alt="404"
        width={90}
        height={90}
      />
      <h3 className={loading.title}>Запрос обрабатывается!</h3> */}
      <Result title={key1.title}
        text={key1.text}
        buttonText={key1.buttonText}
        image={key1.image} />
    </div>
  );
}
