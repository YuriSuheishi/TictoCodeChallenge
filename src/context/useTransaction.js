import { useContext } from "react";
import transactionContext from "./transactionContext";

export default function UseTransaction() {
  const context = useContext(transactionContext);
  if (!context) {
    throw new Error("useTransaction must be used within a ThemeProvider");
  }
  return context;
}