import styles from './waiting.module.css'
import Result from './components/result'
import { key2 } from './../constants'
import { key3 } from './../constants'


const WaitingModal: React.FC = () => {

    return (
        <div className={styles.container}>
            <Result title={key2.title}
                text={key2.text}
                buttonText={key2.buttonText}
                image={key2.image} />
        </div>
    )
}
export default WaitingModal