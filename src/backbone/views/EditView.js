import $ from 'jquery';
import { dispatch } from '../../dispatch';
import { setRoute, setPost, updatePost } from '../../redux/actions';

export default class EditView extends Backbone.View {
  get template(){ return require("../../templates/edit.ejs"); }

  get events(){
    return {
      "click #updateBtn" : "update",
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

  update(e){
    e.preventDefault();
    e.stopPropagation();
    dispatch(updatePost(this.model.toJSON()));
    dispatch(setRoute(`/${this.model.id}`));
  }

  render(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
}
