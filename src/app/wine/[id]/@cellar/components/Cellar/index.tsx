"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import { useParams } from "next/navigation";

export default function Cellar() {
  const params = useParams();
  const wineId = params["id"] as string;

  if (parseInt(wineId) > 8) {
    throw new Error("ERRORRR")
  }

  return <div>item location for {wineId}</div>;
}
