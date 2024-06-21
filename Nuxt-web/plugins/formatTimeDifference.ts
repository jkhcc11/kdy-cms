export default defineNuxtPlugin(() => {
  //时间格式化
  const formatTimeDifference = (dateTimeString: string): string => {
    const now = new Date();
    const targetDate = new Date(dateTimeString);

    const diffInSeconds = Math.floor((now.getTime() - targetDate.getTime()) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInSeconds < 60) {
      return `${diffInSeconds}秒前`;
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes}分钟前`;
    } else if (diffInHours < 48) {
      return `${diffInHours}小时前`;
    } else if (diffInDays < 30) {
      return `${diffInDays}天前`;
    } else {
      return dateTimeString.split(' ')[0];
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
