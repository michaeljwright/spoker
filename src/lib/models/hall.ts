import { customAlphabet } from 'nanoid';
import type { Input } from 'valibot';
import { boolean, minLength, object, optional, regex, string } from 'valibot';
import { requiredString } from '~/lib/models/primitives';

const nanoid = customAlphabet('1234567890abcdef', 12);
const randomId = nanoid(21);

export const initialValues: CreateRoomFormType = {
  name: '',
  id: randomId,
  isPrivate: false,
  password: '',
};

export const createRoomFormSchema = object({
  name: requiredString('Name must be filled'),
  id: string(minLength(1, 'id must be filled')),
  isPrivate: boolean(),
  password: optional(string()),
});

export type CreateRoomFormType = Input<typeof createRoomFormSchema>;
