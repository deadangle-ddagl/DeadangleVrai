export type NotificationType = 'success' | 'error' | 'info';

export function showNotification(message: string, type: NotificationType = 'info') {
  // Cette fonction peut être connectée à un système de toast ou autre
  console.log(`[${type.toUpperCase()}] ${message}`);
}
