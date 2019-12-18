import Router from 'koa-router';
import auth from './auth';

const api = new Router();
api.use('/auth', auth.routes());

api.get('/', ctx => {
  ctx.body = 'hello api!';
});

export default api;
