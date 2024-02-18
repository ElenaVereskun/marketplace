export interface IValues {
  name: string
  surname: string
  email: string
  phone: number
  password:string
  repeatPassword:string
}

export interface IProps {
  id: number,
  title: string,
  text: string | null,
  buttonText: string | null,
  image: HTMLImageElement,
} 

export interface IModalOpen {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  isModalOpen: boolean
  isHavePassword:boolean
  buttonText:string
}