import { z } from 'zod';
import { db } from '@/src/model/_db';

export const schema = z.object({
  contactId: z.string(),
  accountType: z.string(),
  accountTypeOther: z.string(),
  accountName: z.string().min(1, { message: 'Required' }),
  mailName: z.string().optional(),
  associatedEntities: z.string().optional(),
  accountOwner: z.string(),
  emails: z.object({ email1: z.string().min(1, { message: 'Required' }).email(), email2: z.string().email() }),
  statementDelivery: z.string().min(1, { message: 'Required' }),
  shouldRegister: z.string(),
  industryType: z.string(),
  otherActivities: z.string().optional(),
  friends: z.object({ friend: z.string().min(1, { message: 'Required' }) }).array(),
});

export type FormValues = z.infer<typeof schema>;

export const table = db.clientInfos;
