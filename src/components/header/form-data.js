"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { errorMapper, dateNow } from "@/utils";
import Image from "next/image";
import styles from "./form-data.module.scss";
import icCircleArrowDown from '../../assets/images/ic-arrow-down-circle.svg';
import icCircleArrowUp from '../../assets/images/ic-arrow-up-circle.svg';
import clsx from "clsx";
import UseTransaction from "@/context/useTransaction";


export default function FormData({ closeModal }) {
    const { data : ProviderData, setData } = UseTransaction();

    const {
        register,
        handleSubmit,
        setValue,
        setError,
        clearErrors,
        watch,
        reset,
        formState: { errors }
    } = useForm();

    console.log(errors);

    const type = watch("type"); 

    const onSubmit = (data) => {
        if (!data.type) {
            setError("type", { type: "required", message: "Selecione um tipo de transação" });
            return;
        }

        const lastDataId = ProviderData.history.at(-1).id;
        const value = Number(data?.value);
        let newData = ProviderData;

        if(type === 'in'){
            newData.total += value;
            newData.cashIn += value;
        } else {
            newData.total -= value;
            newData.cashOut += value;
        }
        
        newData.history.push({
            ...data,
            id: lastDataId + 1,
            date: dateNow(),
            type: type,
            value: value
        })

        setData(() => ({
            ...newData
        }));
        reset();
        closeModal();
    };

    return (
        <div className={styles.modal}>
            <div className={styles.titleModal}> Cadastrar Transação </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("desc", { required: true })}
                    className={styles.input}
                    placeholder="Nome"
                />
                {errors?.desc && (<p>{errorMapper(errors?.desc?.type)}</p>)}

                <input
                    {...register("value", { required: true, min: 0, max: 10000000 })}
                    type="number"
                    className={styles.input}
                    placeholder="Preço"
                />
                {errors?.value && (<p>{errorMapper(errors?.value?.type)}</p>)}

                <div className={styles.checkboxGroup}>
                    <div 
                        className={clsx(type === 'in' ? styles.checkboxIn : styles.checkboxDefault, styles.checkbox)} 
                        onClick={() => {
                            setValue("type", "in");
                            clearErrors("type");
                        }}
                    >
                        <Image
                            src={icCircleArrowUp}
                            alt="Icone Entrada"
                            width={20}
                            height={20}
                        />
                        Entrada
                    </div>
                    <div 
                        className={clsx(type === 'out' ? styles.checkboxOut : styles.checkboxDefault, styles.checkbox)} 
                        onClick={() => {
                            setValue("type", "out");
                            clearErrors("type");
                        }}
                    >
                        <Image
                            src={icCircleArrowDown}
                            alt="Icone Saida"
                            width={20}
                            height={20}
                        />
                        Saída
                    </div>
                </div>
                {errors?.type && (<p>{errors?.type?.message}</p>)}

                <input
                    {...register("category")}
                    className={styles.input}
                    placeholder="Categoria"
                />

                <button
                    className={styles.btn}
                    type="submit"
                >
                    CADASTRAR
                </button>
            </form>

        </div>
    );
}