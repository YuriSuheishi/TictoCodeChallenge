"use client";
import { useState, useEffect } from "react";
import { mockData } from "@/utils";
import transactionContext from "./transactionContext";

export const TransactionProvider = ({ children }) => {
    const [data, setData] = useState(mockData);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <transactionContext.Provider value={{ data, setData }}>
            {children}
        </transactionContext.Provider>
    );
};