addEventListener("fetch", (event) => {

  const resp = new Response("Hello", {
    headers: { "content-type": "text/plain" },
  });

  event.respondWith(resp);
});
