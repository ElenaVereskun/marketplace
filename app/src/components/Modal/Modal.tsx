import Image from 'next/image'
import styles from './Modal.module.css'
import DoneImage from '@/app/src/images/done.svg'

export default function Registration(): React.JSX.Element {
    return (

        <div className={styles.modal}>
            <div className={styles.container}>
                <Image src={DoneImage} className={styles.doneImage} alt='сделано'/>
                <h2 className={styles.title}>Запрос отправлен</h2>
                <p className={styles.text}>Скопируйте ссылку на страницу ожидания ответа</p>
                <div className={styles.inputContainer}>
                    <input className={styles.input}
                    placeholder='https://waiting.ru'></input>
                    <button className={styles.copyButton} ></button>
                </div>
                <p className={styles.choice}>Или</p>
                <button className={styles.waitingPage}>Перейдите на страницу ожидания ответа</button>
                <button className={styles.closeButton} ></button>
            </div>
        </div>

    )
}