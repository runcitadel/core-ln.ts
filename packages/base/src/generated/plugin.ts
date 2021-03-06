/**
 * lightning-plugin -- Manage plugins with RPC
 *
 * **plugin** command [*parameter*] [*second_parameter*]
 *
 */

/**
 * The **plugin** RPC command allows to manage plugins without having to
 * restart lightningd. It takes 1 to 3 parameters: a command
 * (start/stop/startdir/rescan/list) which describes the action to take and
 * optionally one or two parameters which describes the plugin on which the
 * action has to be taken.
 *
 * The *start* command takes a path as the first parameter and will load
 * the plugin available from this path.  Any additional parameters are
 * passed to the plugin. It will wait for the plugin to complete the
 * handshake with `lightningd` for 20 seconds at the most.
 *
 * The *stop* command takes a plugin name as parameter. It will kill and
 * unload the specified plugin.
 *
 * The *startdir* command takes a directory path as first parameter and will
 * load all plugins this directory contains. It will wait for each plugin to
 * complete the handshake with `lightningd` for 20 seconds at the most.
 *
 * The *rescan* command starts all not-already-loaded plugins from the
 * default plugins directory (by default *~/.lightning/plugins*).
 *
 * The *list* command will return all the active plugins.
 */
export interface PluginRequest {
  command: /* GUESSED */ string;
  parameter?: /* GUESSED */ string;
  second_parameter?: /* GUESSED */ string;
}

export interface PluginResponse {
  /**
   * the subcommand this is responding to
   */
  command: Command;
}

/**
 * the subcommand this is responding to
 */
export enum Command {
  List = "list",
  Rescan = "rescan",
  Start = "start",
  Startdir = "startdir",
  Stop = "stop",
}
