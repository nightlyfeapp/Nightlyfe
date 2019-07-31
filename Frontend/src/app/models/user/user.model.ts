import { Event } from '../event/event.model';

export class User {
  username: string;
  email: string;
  password: string;
  eventsCreated: [Event];
}
