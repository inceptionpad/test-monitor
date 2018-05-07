'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;
  router.get('/', controller.home.index);

  router.get('/project', controller.project.get);
  router.post('/project/create', controller.project.create);
  router.get('/project/update', controller.project.update);
  router.get('/project/delete', controller.project.delete);

  router.get('/apitest/collection', controller.apitestcollection.get);
  router.post('/apitest/collection/create', controller.apitestcollection.create);
  router.post('/apitest/collection/update', controller.apitestcollection.update);
  router.post('/apitest/collection/delete', controller.apitestcollection.delete);
  router.post('/apitest/collection/upload', controller.apitestcollection.upload);

  router.get('/apitest/case', controller.apitestcase.get);
  router.get('/apitest/case/run', controller.apitestcase.run);
  router.get('/apitest/case/history', controller.apitestcase.getHistory);
  router.get('/apitest/case/statistics', controller.apitestcase.getStatistics);
  router.post('/apitest/case/create', controller.apitestcase.create);
  router.post('/apitest/case/update', controller.apitestcase.update);
  router.post('/apitest/case/delete', controller.apitestcase.delete);

  router.get('/uitest/collection', controller.uitestcollection.get);
  router.post('/uitest/collection/create', controller.uitestcollection.create);
  router.post('/uitest/collection/update', controller.uitestcollection.update);
  router.post('/uitest/collection/delete', controller.uitestcollection.delete);

  router.get('/uitest/case', controller.uitestcase.get);
  router.get('/uitest/case/run', controller.uitestcase.run);
  router.get('/uitest/case/history', controller.uitestcase.getHistory);
  router.get('/uitest/case/statistics', controller.uitestcase.getStatistics);
  router.post('/uitest/case/create', controller.uitestcase.create);
  router.post('/uitest/case/update', controller.uitestcase.update);
  router.post('/uitest/case/delete', controller.uitestcase.delete);

  router.get('/env', controller.env.get);
  router.post('/env/create', controller.env.create);
  router.get('/env/update', controller.env.update);
  router.get('/env/delete', controller.env.delete);

  router.get('/user', controller.user.get);
  router.post('/user/login', controller.user.login);
  router.get('/user/logout', controller.user.logout);
};