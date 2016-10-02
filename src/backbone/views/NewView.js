import $ from 'jquery';
import { dispatch } from '../../dispatch';
import { setRoute, setPost, createPost } from '../../redux/actions';

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
    dispatch(setPost({ "title": $(e.currentTarget).val() }));
  }

  changeContent(e){
    dispatch(setPost({ "content": $(e.currentTarget).val() }));
  }

  createPost(e){
    e.preventDefault();
    e.stopPropagation();
    const id = new Date().getTime();
    dispatch(createPost(Object.assign(this.model.toJSON(), { id })));
    dispatch(setRoute(`/${id}`));
  }

  render(){
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  }
}
