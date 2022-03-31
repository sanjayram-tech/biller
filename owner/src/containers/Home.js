import React from "react";
import styles from "./index.module.css"
import { Button } from "@mui/material";
import {Link} from 'react-router-dom';
export default function Home() {
    return(
    <div className={styles.container}>
        <div className={styles.fst}>
            <Link to="/signin">
            <Button variant="outlined">owner</Button>
            </Link>
            <Link to="/signin">
            <Button variant="outlined">customer</Button>
            </Link>
        </div>
    </div>
    )
}

