import parseFn from 'https://esm.sh/parse-function'
const parseFn = require('parse-function');
const app = parseFn();

addEventListener("fetch", (event) => {
  const fn = `
    (x, y) => {
      throw 123;
    }
  `;

  const nonFn = 'const f = {}'

  const evil = 'throw new Error(123)'

  const evalFn = eval(fn);

  const resp = new Response("Hello2", {
    headers: { "content-type": "text/plain" },
  });

  // console.log(evalFn(2, 3));

  // try {
  //   const result = app.parse(evalFn, {
  //     ecmaVersion: 2017,
  //     throwExpressions: true,
  //   });

  //   if (result.body === '') {
  //     console.log('');
  //     Deno.exit(1);
  //   }

  //   const queryArgs = [2, 3, 4];
  //   console.log(evalFn.apply(null, queryArgs));

  // } catch (e) {
  //   console.log({ err: e.message || e });
  //   Deno.exit(1);
  // }

  event.respondWith(resp);
});
