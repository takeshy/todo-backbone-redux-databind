import $ from 'jquery';
import Backbone from 'backbone';
import IndexView from '../views/IndexView';
import NewView from '../views/NewView';
import EditView from '../views/EditView';
import ShowView from '../views/ShowView';
import { PostsCollection, Post } from '../models/Post';

export default class AppRouter extends Backbone.Router {
  get routes(){
    return {
      "new"      : "newPost",
      "index"    : "index",
      ":id/edit" : "edit",
      ":id"      : "show",
      ".*"        : "index"
    }
  }

  initialize(){
    this.posts = new PostsCollection();
    this.post = new Post();
    this.$elem = $("#app");
    this.posts.on("add remove change", ()=> localStorage.setItem('posts', JSON.stringify(this.posts.toJSON())));
  }

  draw(view){
    if(this.view){ this.view.remove(); }
    this.$elem.html(view.render().el);
    this.view = view;
  }

  index(){
    const view = new IndexView({ collection: this.posts });
    this.draw(view);
  }

  newPost(){
    const view = new NewView({ collection: this.posts, model: this.post });
    this.draw(view);
  }

  show(id){
    const view = new ShowView({ model: this.posts.get(id) });
    this.draw(view);
  }

  edit(id){
    const view = new EditView({ model: this.posts.get(id) });
    this.draw(view);
  }
}
