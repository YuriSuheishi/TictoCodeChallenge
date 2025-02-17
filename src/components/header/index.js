"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import styles from "./index.module.scss";
import icTicto from '../../assets/images/ticto-logo.svg';
import useWindowWidth from "@/hooks/use-window-width";
import Modal from "../modal";
import FormData from "./form-data";


export default function Header() {
    const [ openModal, setOpenModal ] = useState(false);
    const isMobile = !(useWindowWidth() > 576);
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className={styles.container}>
            <Modal isOpen={openModal} closeModal={() => setOpenModal(false)} >
                <FormData  closeModal={() => setOpenModal(false)} />
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