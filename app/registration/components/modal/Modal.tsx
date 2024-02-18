import Image from 'next/image'
import Link from 'next/link'
import styles from './Modal.module.css'
import DoneImage from '@/app/src/images/done.svg'

export interface IControlsProps {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    isModalOpen: boolean
    title: string
    text: string
    button: string
    isHavePassword: boolean
}

const Modal: React.FC<IControlsProps> = props => {

    const { setIsModalOpen, title, text, button, isModalOpen, isHavePassword } = props

    return (
        <div className={isModalOpen ? styles.modal : styles.modalBlock}>
            <div className={styles.container}>
                <Image src={DoneImage} className={styles.doneImage} alt='сделано' />
                <h2 className={styles.title}>{title}</h2>

                {isHavePassword ?
                    (<div>
                        <Link href='/'>
                            <button className={styles.waitingPage}>{button}</button>
                        </Link>
                    </div>) : (
                        <>
                            <p className={styles.text}>{text}</p>
                            <div className={styles.inputContainer}>
                                <input className={styles.input}
                                    placeholder='https://waiting.ru'></input>
                                <button className={styles.copyButton}></button>
                            </div>
                            <p className={styles.choice}>Или</p>
                            <Link href='/waiting'>
                                <button className={styles.waitingPage}>{button}</button>
                            </Link>
                        </>
                    )}
                <button className={styles.closeButton} onClick={() => setIsModalOpen(false)} ></button>
            </div>
        </div>
    )
}
export default Modal