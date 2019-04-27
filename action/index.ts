
import { SlackBot, SlackController } from 'botkit';

import { loadSchedules } from './schedules';
import { loadSkills } from './skills';

const attachAction = (bot: SlackBot, controller: SlackController) => {
  loadSchedules(bot);
  loadSkills(controller);
};

export { attachAction };
