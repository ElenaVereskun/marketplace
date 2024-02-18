import styles from './result.module.css'
import Image from 'next/image'


export interface IControlsProps {
    title: string
    text: string | null
    buttonText: string | null
    image: HTMLImageElement

}

const Result: React.FC<IControlsProps> = props => {
    const { title, text, buttonText, image } = props

    return (
        <>
            <Image src={image} width={89}
                height={89} alt='сделано' />
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
            <button className={
                buttonText === null ? styles.buttonBlock : styles.button
            }>{buttonText}</button>
        </>
    )
}
export default Result