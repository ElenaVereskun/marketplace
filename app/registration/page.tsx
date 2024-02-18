'use client'
import React from "react";
import Modal from "@/app/registration/components/modal/Modal"
import FormRegistration from "./components/FormRegistration/FormRegistration";
import { IModalOpen } from '@/app/types'

const Registration: React.FC<IModalOpen> = props => {
    const {  isHavePassword, buttonText} = props
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

    return (
        <>
            <FormRegistration setIsModalOpen={setIsModalOpen}
                isModalOpen={isModalOpen} 
                isHavePassword={isHavePassword}
                buttonText="Регистрация" />
            <Modal title="Запрос отправлен"
                text="Скопируйте ссылку на страницу ожидания ответа"
                button="Перейдите на страницу ожидания ответа"
                setIsModalOpen={setIsModalOpen}
                isModalOpen={isModalOpen}
                isHavePassword={isHavePassword} />
        </>
    );
}
export default Registration