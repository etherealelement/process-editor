import { CreateProcessForm } from "./ui/create-process-form";
import { Root } from "./ui/root";
import { ProcessCard } from "./ui/process-card";
import { useProcessList } from "./model/use-process-list";
export function Page() {
  const { list, createProcess, deleteProcess } = useProcessList();

  return (
    <Root
      title="process-list"
      createForm={
        <CreateProcessForm onSubmit={createProcess}></CreateProcessForm>
      }
      cards={
        <>
          {list.map((item) => (
            <ProcessCard
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
