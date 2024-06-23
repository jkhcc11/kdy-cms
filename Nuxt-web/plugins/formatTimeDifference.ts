import dayjs from 'dayjs';

export default defineNuxtPlugin(() => {
  //时间格式化
  const formatTimeDifference = (dateTimeString: string): string => {
    const runtimeConfig = useRuntimeConfig();
    const timezone = runtimeConfig.public.timeZone;

    // 获取当前时间并设置时区
    const now = dayjs().tz(timezone);
    // 解析目标时间并设置时区
    const targetDate = dayjs(dateTimeString).tz(timezone);

    // 计算时间差
    const diffInSeconds = now.diff(targetDate, 'second');
    const diffInMinutes = now.diff(targetDate, 'minute');
    const diffInHours = now.diff(targetDate, 'hour');
    const diffInDays = now.diff(targetDate, 'day');

    if (diffInSeconds < 60) {
      return `${diffInSeconds}秒前`;
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes}分钟前`;
    } else if (diffInHours < 48) {
      return `${diffInHours}小时前`;
    } else if (diffInDays < 30) {
      return `${diffInDays}天前`;
    } else {
      return targetDate.format('YYYY-MM-DD');
    }
  };

  return {
    provide: {
      formatTimeDifference
    }
  };
});

declare module '#app' {
  interface NuxtApp {
    $formatTimeDifference: string;
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $formatTimeDifference(msg: string): string;
  }
}
