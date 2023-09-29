"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useParams } from "next/navigation"
import { useEffect } from "react";

async function getData() {
  console.log(`calling get data`);
  const res = await fetch("/api/wine");
  return res.json();
}

export default function Wine() {
  const handleClick = () => getData();
  const params = useParams()

  const wineId = params["id"] as string
  console.log(`id is ${wineId}`)

  return (
    <>
      Item
      <button onClick={handleClick}>hohoho</button>
      <Link href={`/wine/${parseInt(wineId) + 1}`}>next item</Link>
    </>
  );
}
