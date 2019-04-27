import fs from 'fs';
import { SlackController } from 'botkit';

const loadSkills = (controller: SlackController) => {
  fs.readdirSync(__dirname).forEach((filename) => {
    if (filename !== 'index.ts' && !filename.includes('.disabled.')) {
      require(`./${filename}`).default(controller);
    }
  });
};

export { loadSkills };
