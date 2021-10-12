import parseFn from 'https://cdn.skypack.dev/parse-function';

addEventListener("fetch", (event) => {
  
  const app = parseFn();
  
  const fn = '(x, y) => x + y';

  // const func = new Function('x', 'y', 'return x + y;');

  // func.bind(null, [2, 3]);

  //console.log(func.toString());

  //const res = func(1, 2);

  //console.log(res);

  const resp = new Response("Hello", {
    headers: { "content-type": "text/plain" },
  });

  event.respondWith(resp);
});
