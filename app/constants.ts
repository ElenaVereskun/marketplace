import { IProps } from '../app/types'
import DoneImage from '@/app/src/images/done.svg'
import Loader from "./src/images/loader.svg";
import Refusal from '@/app/src/images/refusal.svg'

export const key1: IProps = {
    id: 1,
    title: 'Запрос обрабатывается!',
    text: null,
    buttonText: null,
    image: Loader,
}
export const key2: IProps = {
    id: 2,
    title: 'Запрос обработан!',
    text: 'Перейдите на страницу продолжения регистрации.',
    buttonText: 'Перейти',
    image: DoneImage,
}
export const key3: IProps = {
    id: 3,
    title: 'Запрос отклонен!',
    text: null,
    buttonText: null,
    image: Refusal,
}
