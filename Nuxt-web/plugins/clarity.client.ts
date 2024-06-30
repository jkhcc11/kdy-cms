export default defineNuxtPlugin(() => {
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

    //custom umami
    const umamiScript = document.createElement('script');
    umamiScript.src = 'https://umami.kdy666.pro/script.js';
    umamiScript.setAttribute('data-website-id', '0cfc4fdb-6962-4846-8ea3-964c9fb5e4ba');
    umamiScript.defer = true;
    const s = document.getElementsByTagName('script')[0];
    s.parentNode?.insertBefore(umamiScript, s);
  }
});
