import Backbone from 'backbone';
import AppRouter from './backbone/routers/AppRouter';
import $ from 'jquery';
Backbone.sync = ()=>{}

$(() => {
  window.router = new AppRouter();
  Backbone.history.start();
});
