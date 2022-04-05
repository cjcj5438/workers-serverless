import React, {useState} from "react";
import {useEffect} from "react";

export const Workers = () => {
  const [msg, setMsg] = useState([]);
  useEffect(() => {
    fetch('/api').then(async (response) => {
      console.log(response);
    })
    fetch('/api/KV-set-data').then(async (response) => {
      console.log(response);
    })
  }, []);

    return (
      <div>12321454{msg}</div>
    )
  }
