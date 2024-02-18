'use client'
import Link from "next/link";
import React from "react";
import Registration from "./registration/page";

export default function Home() {
  
  
  return (
    <>
      <Link href='/registration'>
        Registration
      </Link>
    </>
  );
}