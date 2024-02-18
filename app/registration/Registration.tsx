'use client'
import React from "react";
//import {notFound} from "next/navigation"
import styles from './Registration.module.css'
import { IValues } from "@/app/types";
import Modal from "@/app/modal/Modal"


export default function Registration(): React.JSX.Element {
    const [values, setValues] = React.useState<IValues>({
        name: '',
        surname: '',
        email: '',
        phone: 0,
    });
    const [errors, setErrors] = React.useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
    });

    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

    const handleChange = (event: { target: any; }) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
    };

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
    }
    console.log(isModalOpen)

    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit} >
                <div className={styles.container}>
                    <h2 className={styles.title}>Регистрация аккаунта</h2>
                    <div>
                        <p className={styles.element}>Имя</p>
                        <input className={styles.input}
                            value={values.name}
                            onChange={handleChange}
                            type="text"
                            name="name"
                            placeholder="Имя"
                            pattern="^[а-яА-ЯёЁa-zA-Z\''\-\]+$"
                            minLength={2}
                            maxLength={30}
                            required />
                        <span className={styles.error}>{errors.name}</span>
                    </div>
                    <div>
                        <p className={styles.element}>Фамилия</p>
                        <input className={styles.input}
                            value={values.surname}
                            onChange={handleChange}
                            type="text"
                            name="surname"
                            placeholder="Фамилия"
                            pattern="^[а-яА-ЯёЁa-zA-Z\''\-\]+$"
                            minLength={2}
                            maxLength={30}
                            required />
                        <span className={styles.error}>{errors.surname}</span>
                    </div>

                    <div>
                        <p className={styles.element}>Email</p>
                        <input className={styles.input}
                            value={values.email}
                            onChange={handleChange}
                            type="email"
                            name="email"
                            placeholder="Email"
                            pattern="^[a-zA-Z0-9\.\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]+$"
                            minLength={2}
                            maxLength={30}
                            required />
                        <span className={styles.error}>{errors.email}</span>
                    </div>

                    <div>
                        <p className={styles.element}>Телефон</p>
                        <input className={styles.input}
                            value={values.phone}
                            onChange={handleChange}
                            type='tel'
                            rel="to-replace"
                            name="phone"
                            pattern="^(\+[0-9]{2,})+[0-9]?$"
                            placeholder="+7 000 000 00 00"
                            minLength={12}
                            maxLength={12}
                            required />
                        <span className={styles.error}>{errors.phone}</span>
                    </div>
                    <button className={styles.button} onClick={() => setIsModalOpen(true)}>Регистрация</button>
                </div>
            </form>
            <Modal title="Запрос отправлен"
                text="Скопируйте ссылку на страницу ожидания ответа"
                button="Перейдите на страницу ожидания ответа"
                setIsModalOpen={setIsModalOpen} />
        </div>
    );
}
