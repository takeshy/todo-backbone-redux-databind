import { Post } from '../models/Post'
import $ from 'jquery';

export default class NewView extends Backbone.View {
  get template(){ return require("../../templates/new.ejs") }

  events(){ 
    return {
      "click #createBtn": "createPost",
      "change #title": "changeTitle",
      "change #content": "changeContent"
    }
  }

  changeTitle(e){
    this.model.set("title", $(e.currentTarget).val());
  }

  changeContent(e){
    this.model.set("content", $(e.currentTarget).val());
  }

  createPost(e){
    e.preventDefault();
    e.stopPropagation();
    const id = new Date().getTime();
    this.collection.add(Object.assign(this.model.toJSON(),{ id: id }));
    this.model.set({id: null, title: null, content: null});
    window.location.hash = `/${id}` 
  }

  render(){
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  }
}
