'use client'
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useFormWithValidation } from '@/app/src/useForm/useForm'
import { useForm } from "@/app/src/useForm/useForm";
//import {notFound} from "next/navigation"
import styles from './Registration.module.css'
import { IValues } from "@/app/types";


export default function Registration(): React.JSX.Element {
    const [values, setValues] = React.useState<IValues>({
        name: '',
        surname:'',
        email:'',
        phone: 0,
    });
    const [errors, setErrors] = React.useState({
        name: '',
        surname:'',
        email:'',
        phone: '',
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

    return (
        <section className='register'>
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
                    </div>
                    <span className={styles.error}>{errors.surname}</span>
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
                    </div>
                    <span className={styles.error}>{errors.email}</span>
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
                    </div>
                    <span className={styles.error}>{errors.phone}</span>
                    <button className={styles.button}>Регистрация</button>
                </div>
            </form>
        </section>
    );
}
