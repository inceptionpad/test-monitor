'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async get() {
    this.ctx.body = '';
  }

  async login() {
    this.ctx.body = '';
  }

  async logout() {
    this.ctx.body = '';
  }
}

module.exports = UserController;
