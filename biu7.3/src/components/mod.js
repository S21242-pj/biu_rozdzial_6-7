import React from "react";
import {useParams} from 'react-router-dom'
import Error from "./error";

export default function Mod() {

    const {a, b} = useParams();

    return (
        <div>Wynik modulo {a} % {b} to: {parseFloat(a)%parseFloat(b)}</div>
    )
}
