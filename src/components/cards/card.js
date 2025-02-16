import Image from "next/image";
import styles from "./card.module.scss";
import ArrowUp from '../../assets/images/ic-arrow-up.svg';
import ArrowDown from '../../assets/images/ic-arrow-down.svg';
import clsx from 'clsx';



export default function Card({title, value, type}) {
    const isTotal = (type === 'all');
    const isIncome = (type === 'in');

    return (
        <div className={ clsx( isTotal ? styles.all : styles.default, styles.container) }>
            <div className={styles.title} >
                {title}
                {!isTotal && (
                    <Image
                        src={isIncome ? ArrowDown : ArrowUp}
                        alt={isIncome ? "Icone Entradas" : "Icone Saídas"}
                        width={20}
                        height={20}
                    />
                )}
            </div>
            <div className={styles.value}>
                {value}
            </div>
        </div>
    );
}