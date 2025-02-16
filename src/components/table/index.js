import Image from "next/image";
import styles from "./index.module.scss";
import IcLixo from '../../assets/images/ic-trash.svg';
import clsx from "clsx";


export default function Table() {
    const mockTable = [
        { key: 0, desc: 'Curso de NextJS', value: 'R$ 900,00', category: 'Educação', data: '12/02/2022 às 13h24', type: 'out' },
        { key: 1, desc: 'Salario', value: 'R$ 7350,00', category: 'Receita Fixa', data: '12/02/2022 às 13h24', type: 'in' },
        { key: 2, desc: 'Curso AB', value: 'R$ 1700,00', category: 'Educação', data: '12/02/2022 às 13h24', type: 'out' },
    ];

    return (
        <div className={styles.container}>
            <ul className={styles.table}>
                <li className={styles.tableHeader}>
                    <div className={ styles.col1 }> Descrição </div>
                    <div className={ styles.col2 }> Valor </div>
                    <div className={ styles.col3 }> Categoria </div>
                    <div className={ styles.col4 }> Data </div>
                    <div className={ styles.col5 }> </div>
                </li>
                {mockTable.map((e) => {
                    return (
                        <li className={styles.tableRow} key={e.key}>
                            <div className={ styles.col1 }> {e.desc} </div>
                            <div className={ clsx(styles.col2, e.type === 'in' ? styles.in : styles.out) }> {e.value} </div>
                            <div className={ styles.col3 }> {e.category} </div>
                            <div className={ styles.col4 }> {e.data} </div>
                            <div className={ styles.col5 }>
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