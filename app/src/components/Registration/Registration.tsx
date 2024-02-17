'use client'
import Image from "next/image";
import { useState } from "react";
import { useFormWithValidation } from '@/app/src/useForm/useForm'
//import {notFound} from "next/navigation"
import styles from './Registration.module.css'

export default function Registration() {
    const { values, handleChange, errors, isValid } = useFormWithValidation();
    const [isFormError, setIsFormError] = useState('');

    /*     function handleSubmit(e) {
            e.preventDefault();
            const { name, email, password } = values;
            mainApi.register({ name, email, password })
                .then((data) => {
                    localStorage.setItem('jwt', data.token);
                    setIsLoggedIn(true);
                })
                .then(() => navigate("/movies"))
                .catch((err) => setIsFormError('Пользователь уже зарегистрирован'))
        } */


    return (
        <section className='register'>
            <form className={styles.form} /* onSubmit={handleSubmit} */>
                <div className={styles.container}>
                    <h2 className={styles.title}>Регистрация аккаунта</h2>
                    <div className="register__input-container">
                        <p className={styles.element}>Имя</p>
                        <input className={styles.input}
                            /* value={values.name} */
                            onChange={handleChange}
                            type="text"
                            name="name"
                            placeholder="Имя"
                            pattern="^[а-яА-ЯёЁa-zA-Z\''\-\]+$"
                            minLength={2}
                            maxLength={30}
                            required />
                    </div>
                    {/* <span className="register__name-error"></span> */}
                    <div className="register__input-container">
                        <p className={styles.element}>Фамилия</p>
                        <input className={styles.input}
                            /* value={values.name} */
                            onChange={handleChange}
                            type="text"
                            name="surname"
                            placeholder="Фамилия"
                            pattern="^[а-яА-ЯёЁa-zA-Z\''\-\]+$"
                            minLength={2}
                            maxLength={30}
                            required />
                    </div>
                    {/* <span className="register__name-error"></span> */}
                    <div className="register__input-container">
                        <p className={styles.element}>Email</p>
                        <input className={styles.input}
                            /* value={values.email} */
                            onChange={handleChange}
                            type="email"
                            name="email"
                            placeholder="Email"
                            pattern="^[a-zA-Z0-9\.\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]+$"
                            minLength={2}
                            maxLength={30}
                            required />
                    </div>
                    {/* <span className="register__email-error"></span> */}
                    <div className="register__input-container">
                        <p className={styles.element}>Телефон</p>
                        <input className={styles.input}
                            /* value={values.password} */
                            onChange={handleChange}
                            type="number"
                            rel="to-replace"
                            name="phone"
                            pattern="/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im"
                            placeholder="+7 000 00 00"
                            minLength={6}
                            maxLength={20}
                            required />
                    </div>
                   {/*  <span className="register__password-error"></span> */}

                    {/* <span className="register__form-error">{isFormError}</span> */}
                    <button className={styles.button}>Регистрация</button>

                </div>
            </form>
        </section>
    );
}
