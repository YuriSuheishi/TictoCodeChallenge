"use client"
import { useCallback } from 'react';
import Image from "next/image";
import styles from "./index.module.scss";
import IcLixo from '../../assets/images/ic-trash.svg';
import clsx from "clsx";
import UseTransaction from "@/context/useTransaction";
import { currencyFormat } from "@/utils";


export default function Table() {
    const { data, setData } = UseTransaction();

    const deleteData = useCallback((id) => {
        const thisData = data.history.find((e) => e.id === id);
        let newData = data;
        newData.history = data.history.filter((e) => e.id !== id);

        if(thisData.type === 'in'){
            newData.total -= thisData.value;
            newData.cashIn -= thisData.value;
        } else {
            newData.total += thisData.value;
            newData.cashOut -= thisData.value;
        }

        setData(() => ({
            ...newData
        }));
    },[data, setData]);


    return (
        <div className={styles.container}>
            <ul className={styles.table}>
                <li className={styles.tableHeader}>
                    <div className={styles.col1}> Descrição </div>
                    <div className={styles.col2}> Valor </div>
                    <div className={styles.col3}> Categoria </div>
                    <div className={styles.col4}> Data </div>
                    <div className={styles.col5}> </div>
                </li>
                {data?.history?.map((e) => {
                    return (
                        <li className={styles.tableRow} key={e.id}>
                            <div className={styles.col1}> {e.desc} </div>
                            <div className={clsx(styles.col2, e.type === 'in' ? styles.in : styles.out)}> {currencyFormat(e.value)} </div>
                            <div className={styles.col3}> {e.category} </div>
                            <div className={styles.col4}> {e.date} </div>
                            <div className={styles.col5} onClick={() => deleteData(e.id)}>
                                <Image
                                    src={IcLixo}
                                    alt={"Icone Lixeira"}
                                    width={'13px'}
                                    height={'15px'}
                                />
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}