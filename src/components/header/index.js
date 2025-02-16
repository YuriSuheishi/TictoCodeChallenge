"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import styles from "./index.module.scss";
import icTicto from '../../assets/images/ticto-logo.svg';
import icCircleArrowDown from '../../assets/images/ic-arrow-down-circle.svg';
import icCircleArrowUp from '../../assets/images/ic-arrow-up-circle.svg';
import useWindowWidth from "@/hooks/use-window-width";
import Modal from "../modal";


export default function Header() {
    const [ openModal, setOpenModal ] = useState(false);
    const isMobile = !(useWindowWidth() > 576);
    const { register } = useForm();

    return (
        <div className={styles.container}>
            <Modal isOpen={openModal} closeModal={() => setOpenModal(false)} >
                <div className={styles.modal}>
                    <div className={styles.titleModal}> Cadastrar Transação </div>
                    <div className={styles.form}>
                        <input 
                            className={styles.input}
                            type="text"
                            placeholder="Nome"
                            {...register("name")}
                        />
                        <input 
                            className={styles.input}
                            type="number"
                            placeholder="Preço"
                            {...register("price")}
                        />
                        <div className={styles.checkboxGroup}>
                            <div className={styles.checkbox}>
                                <Image
                                    src={icCircleArrowUp}
                                    alt="Icone Entrada"
                                    width={20}
                                    height={20}
                                />
                                Entrada
                            </div>
                            <div className={styles.checkbox}>
                                <Image
                                    src={icCircleArrowDown}
                                    alt="Icone Saida"
                                    width={20}
                                    height={20}
                                />
                                Saída
                            </div>
                        </div>
                        <input 
                            className={styles.input}
                            type="text"
                            placeholder="Categoria"
                            {...register("category")}
                        />
                        
                         <button 
                            className={styles.btn} 
                            onClick={() => setOpenModal(false)}
                        > 
                            CADASTRAR
                        </button>
                    </div>

                </div>
            </Modal>
            <div className={styles.header}>
                <Image
                    src={icTicto}
                    alt="Logo Ticto"
                    width={186}
                    height={34}
                />
                <button 
                    className={styles.btn} 
                    onClick={() => setOpenModal(true)}
                > 
                    {isMobile ? '+': 'NOVA TRANSAÇÃO'} 
                </button>
            </div>
        </div>
    );
  }