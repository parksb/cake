import fs from 'fs';
import { SlackBot } from 'botkit';

const loadSchedules = (bot: SlackBot) => {
  fs.readdirSync(__dirname).forEach((filename) => {
    if (filename !== 'index.ts' &&  !filename.includes('.disabled.')) {
      require(`./${filename}`).default(bot).start();
    }
  });
};

export { loadSchedules };
