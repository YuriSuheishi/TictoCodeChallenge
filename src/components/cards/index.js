"use client"
import styles from "./index.module.scss";
import Card from "./card";
import UseTransaction from "@/context/useTransaction";

import { currencyFormat } from "@/utils";

export default function Cards() {
    const { data : { cashIn, cashOut, total } } = UseTransaction();

    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                <Card title={'Entradas'} value={currencyFormat(cashIn)} type={'in'} />
                <Card title={'Saídas'} value={currencyFormat(cashOut)} type={'out'} />
                <Card title={'Saldo Total'} value={currencyFormat(total)} type={'all'} />
            </div>
        </div>
    );
}