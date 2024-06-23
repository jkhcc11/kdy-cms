import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

// 加载插件
dayjs.extend(utc);
dayjs.extend(timezone);

export default defineNuxtPlugin(() => {
  return {};
});
