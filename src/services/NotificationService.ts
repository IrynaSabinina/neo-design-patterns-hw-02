import { INotificationChannel, INotificationService } from "../core/interfaces";
import { User } from "../models/User";

export class NotificationService implements INotificationService {
  private channels: Record<
    "email" | "sms" | "push",
    INotificationChannel | null
  > = {
    email: null,
    sms: null,
    push: null,
  };

  addChannel(
    channel: INotificationChannel,
    type: "email" | "sms" | "push"
  ): void {
    this.channels[type] = channel;
  }

  sendEmail(user: User, message: string): void {
    this.channels.email?.send(user, message);
  }

  sendSMS(user: User, message: string): void {
    this.channels.sms?.send(user, message);
  }

  sendPush(user: User, message: string): void {
    this.channels.push?.send(user, message);
  }
}
