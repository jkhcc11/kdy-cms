export default defineNuxtPlugin(() => {
  if (process.client) {
    if (process.client) {
      const scriptContent = `
        (function (c, l, a, r, i, t, y) {
          c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
          t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
          y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
        })(window, document, "clarity", "script", "jrciwf7j5x");
      `;

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.text = scriptContent;
      script.id = 'kdy_tj';
      document.head.appendChild(script);
    }
  }

  // const hm = document.createElement('script');
  // hm.src = 'https://www.clarity.ms/tag/jrciwf7j5x';
  // hm.async = true;
  // const s = document.getElementsByTagName('script')[0];
  // s.parentNode?.insertBefore(hm, s);
});
