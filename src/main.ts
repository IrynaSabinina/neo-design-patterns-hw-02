import { User } from "./models/User";
import { Logger } from "./services/Logger";
import { NotificationService } from "./services/NotificationService";
import { EmailNotification } from "./services/EmailNotification";
import { SMSNotification } from "./services/SMSNotification";
import { PushNotification } from "./services/PushNotification";

const logger = new Logger();
const user = new User("user@example.com", "+1234567890", "device-token-123");

const email = new EmailNotification(logger);
const sms = new SMSNotification(logger);
const push = new PushNotification(logger);

const notificationService = new NotificationService();
notificationService.addChannel(email, "email");
notificationService.addChannel(sms, "sms");
notificationService.addChannel(push, "push");

notificationService.sendEmail(user, "Ваш платіж оброблено успішно!");
notificationService.sendSMS(user, "Ваш платіж оброблено успішно!");
notificationService.sendPush(user, "Ваш платіж оброблено успішно!");
