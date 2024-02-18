'use client'
import Link from "next/link";
import React from "react";
import Registration from "./registration/page";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [isHavePassword, setIsHavePassword] = React.useState<boolean>(false);
  return (
    <>
      <Link href='/registration'>
        <Registration isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          isHavePassword={isHavePassword}
          buttonText="Регистрация" />
      </Link>
    </>
  );
}