/**
 * lightning-notifications -- Command to set up notifications.
 * 
 * **notifications** *enable* 
 * 
 */

/**
 * The **notifications** the RPC command enabled notifications for this JSON-RPC
 * connection.  By default (and for backwards-compatibility) notifications are
 * disabled.
 * 
 * Various commands, especially complex and slow ones, offer
 * notifications which indicate their progress.
 * 
 * - *enable*: *true* to enable notifications, *false* to disable them.
 * 
 * EXAMPLE JSON REQUEST
 * --------------------
 * ```json
 * {
 *   "id": 82,
 *   "method": "notifications",
 *   "params": {
 *     "enable": true
 *   }
 * }
 * ```
 * 
 * NOTIFICATIONS
 * -------------
 * 
 * Notifications are JSON-RPC objects without an *id* field.  *lightningd* sends
 * notifications (once enabled with this *notifications* command) with a *params*
 * *id* field indicating which command the notification refers to.
 * 
 * Implementations should ignore notifications without an *id* parameter, or
 * unknown *method*.
 * 
 * Common *method*s include:
 * 
 * - *message*: param *message*: a descriptional string indicating something
 *   which occurred relating to the command. Param *level* indicates the level,
 *   as per lightning-getlog(7): *info* and *debug* are typical.
 * - *progress*: param *num* and *total*, where *num* starts at 0 and is always
 *   less than *total*. Optional param *stage* with fields *num* and *total*,
 *   indicating what stage we are progressing through.
*/
export interface NotificationsRequest {
  enable: /* GUESSED */ string;
}

export interface NotificationsResponse {}

