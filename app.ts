import botkit from 'botkit';
import dotenv from 'dotenv';

import { channels } from './constants';
import { loadSkills } from './skills';

dotenv.config();

const controller = botkit.slackbot({});
const bot = controller.spawn({ token: process.env.BOT_TOKEN || '' });

controller.startTicking();
loadSkills(controller);

bot.startRTM((error) => {
  if (error) {
    console.log('구동에 실패했습니다');
  } else {
    bot.say({ text: '케이크가 배포되었습니다 😸', channel: channels.bot });
  }
});
