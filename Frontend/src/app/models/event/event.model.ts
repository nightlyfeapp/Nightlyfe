import { User } from '../user/user.model';

export class Event {
  title: string;
  timeOfEvent: Date;
  location: string;
  description: string;
  createdBy: User;
}
