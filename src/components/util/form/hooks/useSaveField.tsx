import { ControllerRenderProps } from 'react-hook-form/dist/types/controller';

import { useModelContext } from '@/src/model/ModelContext';

export function useSaveField() {
  const { table, uid } = useModelContext();

  return (field: ControllerRenderProps) => {
    const { name, value } = field;

    table?.update(uid, { [name]: value }).then(function (updated: number) {
      if (updated) {
        console.log(`${name} updated with ${value}`);
      } else {
        table.add({ [name]: value }, uid);
      }
    });
  };
}
