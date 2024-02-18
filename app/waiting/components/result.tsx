import styles from './result.module.css'
import Image from 'next/image'
import Loader from "../../src/images/loader.svg";
import Link from 'next/link';

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
                height={89} alt='сделано' className={
                    image === Loader ? styles.loader : styles.image
                } />
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
            <Link href='/end-registration'>
                <button className={
                    buttonText === null ? styles.buttonBlock : styles.button
                }
                >{buttonText}</button>
            </Link>

        </>
    )
}
export default Result