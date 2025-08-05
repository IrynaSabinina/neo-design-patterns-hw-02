import { INotificationChannel } from "../core/interfaces";
import { User } from "../models/User";

export class NotificationService {
  private channels: INotificationChannel[] = [];

  constructor(channels: INotificationChannel[] = []) {
    this.channels = channels;
  }

  addChannel(channel: INotificationChannel): void {
    this.channels.push(channel);
  }

  send(user: User, message: string): void {
    for (const channel of this.channels) {
      channel.send(user, message);
    }
  }
}
