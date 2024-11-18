import { useEffect, useState } from "react";
import { processApi } from "../api";

export type ProcessListItem = {
  id: string;
  name: string;
};

export function useProcessList() {
  const [processList, setProcessList] = useState<ProcessListItem[]>([]);

  useEffect(() => {
    processApi.list().then(setProcessList);
  }, []);

  const createProcess = (name: string) => {
    setProcessList([...processList, { id: String(Date.now()), name }]);
  };

  const deleteProcess = (id: string) => {
    setProcessList((item) => item.filter((item) => item.id !== id));
  };

  const list = processList.map((item) => ({
    ...item,
    onDelete: () => deleteProcess(item.id),
  }));

  return {
    list,
    createProcess,
    deleteProcess,
  };
}
