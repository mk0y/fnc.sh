import parseFn from 'https://cdn.skypack.dev/parse-function';

addEventListener("fetch", (event) => {
  
  const app = parseFn();
  
  const fn = '(x, y) => x + y';

  const resp = new Response("Hello", {
    headers: { "content-type": "text/plain" },
  });

  event.respondWith(resp);
});
