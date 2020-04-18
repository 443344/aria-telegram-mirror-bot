module.exports = Object.freeze({
  TOKEN: 'bot_token',
  ARIA_SECRET: 'aria2_secret',
  ARIA_DOWNLOAD_LOCATION: '/home/user/path/to/download/dir (no trailing "/")',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: ['yts', 'YTS', 'cruzing.xyz', 'eztv.ag', 'YIFY'], // 禁止从包含这些子字符串的URL下载
  ARIA_FILTERED_FILENAMES: ['YIFY'], // 文件名中包含这些子字符串的文件/顶级目录将不会下载
  ARIA_PORT: 8210, // aria2c RPC 端口, 如果在此处更改，请确保  aria.sh  也要修改
  GDRIVE_PARENT_DIR_ID: 'id_of_Drive_folder_to_upload_into',
  SUDO_USERS: [012, 345],	// Telegram user IDs. 这些用户在任何聊天中都可以用这个 bot.
  AUTHORIZED_CHATS: [678, 901],	// Telegram chat IDs. 这些群中的任何人都可以使用这个 bot.
  STATUS_UPDATE_INTERVAL_MS: 12000, // bot更新速度（毫秒），小可以使bot更新频率更快，但太小的话可能使下载速度变慢
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: ['someMail@gmail.com', 'someOtherMail@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // 有关Web服务的信息，通知下载完成。
    enabled: false,   // 将此设置为true以使用通知功能
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: false,  //如果为true，则除'/ list'外的所有命令都必须在命令后具有bot用户名
    NAME: "@nameOf_bot"
  },
  IS_TEAM_DRIVE: false
});
