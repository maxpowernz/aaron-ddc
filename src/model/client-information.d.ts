import Dexie, { Table } from 'dexie';
import { z } from 'zod';

export const schema = z.object({
  contactId: z.string(),
  accountType: z.string(),
  accountName: z
    .string()
    .min(1, { message: 'Required' })
    .regex(/^[A-Za-z]+$/i, { message: 'Incorrect pattern' }),
  mailName: z.string().optional(),
  associatedEntities: z.string().optional(),
  accountOwner: z.string(),
  emails: z.object({ email1: z.string().min(1, { message: 'Required' }).email(), email2: z.string().email() }),
  statementDelivery: z.string().min(1, { message: 'Required' }),
  shouldRegister: z.boolean(),
  industryType: z.string(),
  otherActivities: z.string().optional(),
  friends: z.array(z.object({ friend: z.string().min(1, { message: 'Required' }) })),
});

export type FormValues = z.infer<typeof schema>;

export class Records extends Dexie {
  // 'clientInfos' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  clientInfos!: Table<FormValues>;

  constructor() {
    super('ClientInformation');
    this.version(1).stores({
      clientInfos: '++, [contactId]', // Primary key and unique indexed props
    });
  }
}

export const db = new Records();
export const table = db.clientInfos;
