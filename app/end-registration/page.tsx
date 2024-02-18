'use client'
import React from "react";
import FormRegistration from "../registration/components/FormRegistration/FormRegistration";
import { IModalOpen } from '@/app/types'
import Modal from "../registration/components/modal/Modal";
import styles from './EndRegistration.module.css'

const EndRegistration: React.FC<IModalOpen> = props => {
    
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
    return (
        <div className={styles.container}>
            <FormRegistration isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                isHavePassword={true}
                buttonText='Завершить регистрацию' />
            <Modal title="Вы успешно зарегистрированы"
                text=""
                button="На главную"
                setIsModalOpen={setIsModalOpen}
                isModalOpen={isModalOpen} 
                isHavePassword={true}/>
        </div>

    )
}
export default EndRegistration