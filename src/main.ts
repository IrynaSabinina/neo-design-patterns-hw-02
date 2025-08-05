import { User } from "./models/User";
import { Logger } from "./services/Logger";
import { EmailNotification } from "./services/EmailNotification";
import { SMSNotification } from "./services/SMSNotification";
import { PushNotification } from "./services/PushNotification";
import { NotificationService } from "./services/NotificationService";

// Створюємо користувача
const user = new User("user@example.com", "+1234567890", "device-token-123");

// Створюємо логер
const logger = new Logger();

// Створюємо канали
const emailChannel = new EmailNotification(logger);
const smsChannel = new SMSNotification(logger);
const pushChannel = new PushNotification(logger);

// Додаємо канали до сервісу
const notificationService = new NotificationService([
  emailChannel,
  smsChannel,
  pushChannel,
]);

// Надсилаємо повідомлення
notificationService.send(user, "Ваш платіж оброблено успішно!");
