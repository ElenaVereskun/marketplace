import Image from 'next/image'
import Link from 'next/link'
import styles from './Modal.module.css'
import DoneImage from '@/app/src/images/done.svg'

export interface IControlsProps {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    title: string
    text: string
    button: string
}


const Modal: React.FC<IControlsProps> = props => {

    const { setIsModalOpen, title, text, button } = props

    const closeButton = () => {
        console.log('closeButton')

        setIsModalOpen(false)
    }

    return (
        <div className={styles.modal}>
            <div className={styles.container}>
                <Image src={DoneImage} className={styles.doneImage} alt='сделано' />
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.text}>{text}</p>
                <div className={styles.inputContainer}>
                    <input className={styles.input}
                        placeholder='https://waiting.ru'></input>
                    <button className={styles.copyButton} ></button>
                </div>
                <p className={styles.choice}>Или</p>
                <button className={styles.waitingPage}>{button}
                    
                    <Link href="/about">
                    </Link>
                </button>
                <button className={styles.closeButton} onClick={closeButton} ></button>
            </div>
        </div>

    )
}
export default Modal