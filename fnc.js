import parseFn from 'https://cdn.skypack.dev/parse-function';

addEventListener("fetch", (event) => {
  
  const app = parseFn();

  const fn = '(x, y) => x + y';

  const nonFn = 'const f = {}';

  const evil = 'throw new Error(123)';

  const evalFn = eval(fn);

  const queryArgs = [2, 3, 4];
  // console.log(evalFn.apply(null, queryArgs));

  const result = evalFn.apply(null, queryArgs);

  const resp = new Response(result, {
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

  // } catch (e) {
  //   console.log({ err: e.message || e });
  //   Deno.exit(1);
  // }

  event.respondWith(resp);
});
