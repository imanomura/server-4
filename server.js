// 自分で一から書いてみよう
import { Hono } from 'jsr:@hono/hono';
import { serveStatic } from 'jsr:@hono/hono/deno';

const app = new Hono();

app.use('/*', serveStatic({ root: './public' }));

Deno.serve(app.fetch);

app.get('/api', (c) => {
  return c.json({
    message: 'Hello World!'
  });
});
