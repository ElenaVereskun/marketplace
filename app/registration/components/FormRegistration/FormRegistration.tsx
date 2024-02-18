'use client'
import React from "react";
import { IValues } from "@/app/types";
import styles from './FormRegistration.module.css'
import { IModalOpen } from "@/app/types";
import Image from "next/image";
import OpenEyes from '@/app/src/images/OpenEyes.svg'
import CloseEyes from '@/app/src/images/CloseEyes.svg'


const FormRegistration: React.FC<IModalOpen> = props => {
    const { setIsModalOpen, isModalOpen, isHavePassword, buttonText } = props
    const [values, setValues] = React.useState<IValues>({
        name: '',
        surname: '',
        email: '',
        phone: 0,
        password: '',
        repeatPassword: ''
    });
    const [errors, setErrors] = React.useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        password: '',
        repeatPassword: ''
    });
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
    function openModal(){        
        setIsModalOpen(true)
    }
    
    /*  function openEnter() {
         console.log(openEnter)
         return document.querySelector(styles.inputPassword)?.setAttribute('type', 'text')
     } */

    return (

        <>
            <form className={styles.form} onSubmit={handleSubmit}  >
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
                    {isHavePassword ? (
                        <div>
                            <div>
                                <p className={styles.element}>Пароль</p>
                                <div className={styles.inputContainer}>
                                    <input className={styles.inputPassword}
                                        value={values.password}
                                        onChange={handleChange}
                                        type='password'
                                        rel="to-replace"
                                        name="password"
                                        placeholder="Пароль"
                                        minLength={6}
                                        maxLength={20}
                                        required />
                                    <Image src={CloseEyes} alt="скрыть ввод" />
                                </div>
                                <span className={styles.error}>{errors.password}</span>
                            </div>
                            <div>
                                <p className={styles.element}>Повторите пароль</p>
                                <div className={styles.inputContainer}>
                                    <input className={styles.inputPassword}
                                        value={values.repeatPassword}
                                        onChange={handleChange}
                                        type='password'
                                        rel="to-replace"
                                        name="repeatPassword"
                                        placeholder="Пароль"
                                        minLength={6}
                                        maxLength={20}
                                        required />
                                    <Image src={OpenEyes} alt="Показать ввод" />
                                </div>
                                <span className={styles.error}>{errors.repeatPassword}</span>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )
                    }
                    <button className={styles.button} onClick={openModal}>{buttonText}</button>
                </div>
            </form>
        </>
    )
}
export default FormRegistration


