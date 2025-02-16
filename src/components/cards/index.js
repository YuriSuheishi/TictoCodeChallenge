import styles from "./index.module.scss";
import Card from "./card";


export default function Cards() {

    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                <Card title={'Entradas'} value={'R$ 2050,00'} type={'in'} />
                <Card title={'Saídas'} value={'R$ 2000,00'} type={'out'} />
                <Card title={'Saldo Total'} value={'R$ 50,00'} type={'all'} />
            </div>
        </div>
    );
}