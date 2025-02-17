import React, { useRef, useEffect } from "react";
import styles from "./index.module.scss";

export default function Modal({ isOpen, closeModal, children, id = 'modal' }) {

    if (isOpen) {
        return (
            <div id={id} className={styles.bg}>
                <div className={styles.modal}>
                    <button className={styles.closeBtn} onClick={closeModal} />
                    {children}
                </div>
            </div>
        );
    }

    return null
}