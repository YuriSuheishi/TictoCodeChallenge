import React, { useRef, useEffect } from "react";
import styles from "./index.module.scss";

export default function Modal({ isOpen, closeModal, children, id = 'modal' }) {
    
    const handleBackdropClick = (e) => {
        if (e) e.preventDefault();
        if(e.target.id !== id) return;
        closeModal();
    }

    if (isOpen) {
        return (
            <div id={id} className={styles.bg} onClick={handleBackdropClick}>
                <div className={styles.modal}>
                    <button className={styles.closeBtn} onClick={closeModal} />
                    {children}
                </div>
            </div>
        );
    }

    return null
}