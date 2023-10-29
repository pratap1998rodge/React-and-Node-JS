// const winston = require('winston');
// const { createLogger, transports, format } = require('winston');

// exports.logger = createLogger({

//   transports: [
//     new winston.transports.File({

//       levels: winston.config.npm.levels,
//       colors: winston.config.npm.colors,

//       filename: "filelog-info.log",
//       json: true,
//       format: winston.format.combine(
//         winston.format.timestamp(),
//         winston.format.json()
//       ),
//     }),
//     // new winston.transports.File({
//     //   level: "warn",
//     //   filename: "filelog-error.log",
//     //   json: true,
//     //   format: winston.format.combine(
//     //     winston.format.timestamp(),
//     //     winston.format.json()
//     //   ),
//     // }),
//   ],
// });

var winston = require("winston");
require("winston-daily-rotate-file");

var transport = new winston.transports.DailyRotateFile({
  filename: "application-%DATE%.log",
  frequency: "1m",
  datePattern: "YYYY-MM-DD-THH-mm",
  zippedArchive: true,
  //maxSize: "1k",
  maxFiles: 2,
});

transport.on("rotate", function (oldFilename, newFilename) {
  // do something fun
});

exports.logger = winston.createLogger({
  transports: [transport],
});
