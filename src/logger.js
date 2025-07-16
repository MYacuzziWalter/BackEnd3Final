import winston from 'winston';

const { debug, error, http, info, level, warn} = winston;

const customLevels = {
    levels: {
        fatal: 0,
        error: 1,
        warn: 2,
        info: 3,
        http: 4,
        debug: 5
    },

    colors: {
        fatal: 'redBG',
        error: 'red',
        warn: 'yellow',
        info: 'green',
        http: 'magenta',
        debug: 'blue'
    }
};


winston.addColors(customLevels.colors);

const logger = winston.createLogger({
    levels: customLevels.levels,
    level: 'debug',
    format: winston.format.combine(
        winston.format.colorize({all: true}),
        winston.format.timestamp(),
        winston.format.printf(({level, message, timestamp}) => {
            return `[${timestamp}] ${level}: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error'}),
        new winston.transports.File({ filename: 'logs/convined.log'})
    ],
});


export default logger;