import parseFn from 'https://cdn.skypack.dev/parse-function';

addEventListener("fetch", (event) => {

  const resp = new Response("Hello", {
    headers: { "content-type": "text/plain" },
  });

  event.respondWith(resp);
});
