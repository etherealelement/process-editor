import { CreateProcessForm } from "./ui/create-form";
import { Root } from "./ui/root";
import { Filters } from "./ui/filters";
import { ProcessCard } from "./ui/card";
import { useProcessList } from "./model/use-process-list";
import { useFilters } from "./model/use-filters";
export function Page() {
  const { list, createProcess, deleteProcess, isLoading } = useProcessList();
  const [filteredList, { q, setQ }] = useFilters(list);
  return (
    <Root
      title="process-list"
      isLoading={isLoading}
      createForm={
        <CreateProcessForm onSubmit={createProcess}></CreateProcessForm>
      }
      filters={<Filters q={q} onQChange={setQ}></Filters>}
      cards={
        <>
          {filteredList.map((item) => (
            <ProcessCard
              id={item.id}
              key={item.id}
              name={item.name}
              onDelete={() => deleteProcess(item.id)}
            ></ProcessCard>
          ))}
        </>
      }
    ></Root>
  );
}
