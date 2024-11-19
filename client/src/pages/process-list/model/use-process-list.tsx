import { useEffect, useState } from "react";
import { processApi } from "../api";

export type ProcessListItem = {
  id: string;
  name: string;
};

export function useProcessList() {
  const [processList, setProcessList] = useState<ProcessListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchList = () => {
    processApi
      .list()
      .then(setProcessList)
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchList();
  }, []);

  const createProcess = async (name: string) => {
    await processApi.create(name);
    fetchList();
  };

  const deleteProcess = async (id: string) => {
    await processApi.delete(id);
    fetchList();
  };

  const list = processList.map((item) => ({
    ...item,
    onDelete: () => deleteProcess(item.id),
  }));

  return {
    list,
    createProcess,
    deleteProcess,
    isLoading,
  };
}
