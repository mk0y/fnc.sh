import parseFn from 'https://cdn.skypack.dev/parse-function';

addEventListener("fetch", (event) => {
  
  const app = parseFn();

  const resp = new Response("Hello", {
    headers: { "content-type": "text/plain" },
  });

  event.respondWith(resp);
});
