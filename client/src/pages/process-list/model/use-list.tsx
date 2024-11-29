import { useEffect, useState } from "react";
import { processApi } from "../api/";
import { useLoad } from "../../../shared/use-load";

export type ProcessListItem = {
  id: string;
  name: string;
};

export function useList() {
  const {
    data: processList = [],
    isLoading,
    refetch,
  } = useLoad(() => processApi.list());

  const create = async (name: string) => {
    await processApi.create(name);
    refetch();
  };

  const deleteProcess = async (id: string) => {
    await processApi.delete(id);
    refetch();
  };

  const items = processList.map((item) => ({
    ...item,
    onDelete: () => deleteProcess(item.id),
  }));

  return {
    items,
    create,
    isLoading,
  };
}
