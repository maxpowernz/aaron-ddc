import { useModelContext } from '@/src/model/ModelContext';
import { ControllerRenderProps } from 'react-hook-form/dist/types/controller';

export function useSaveField() {
  const { table, uid } = useModelContext();

  return (field: ControllerRenderProps) => {
    const { name, value } = field;
    console.log({ value, uid });
    table?.update(uid, { [name]: value }).then(function (updated: number) {
      if (updated) {
        console.log(`${name} updated with ${value}`);
      } else {
        table.add({ [name]: value }, uid);
      }
    });
  };
}
