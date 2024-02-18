import { key1 } from '../app/constants'
import loading from "./loading.module.css";
import Result from "./waiting/components/result";

export default function Loading() {
  return (
    <div className={loading.container}>
      <Result title={key1.title}
        text={key1.text}
        buttonText={key1.buttonText}
        image={key1.image} />
    </div>
  );
}
