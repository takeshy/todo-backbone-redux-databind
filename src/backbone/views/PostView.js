import { dispatch } from '../../dispatch';
import { deletePost, editPost, navigateEditPost } from '../../redux/actions';
export default class PostView extends Backbone.View{
  get template(){ return require("../../templates/post.ejs") }
  get events(){
    return {
    "click .editPost" : "edit",
    "click .destroyPost" : "destroy"
    };
  }
  get tagName(){ return "tr"; }

  initialize(){
    this.listenTo(this.model,'destroy', this.remove)
    this.listenTo(this.model,'change', this.render)
  }

  destroy(e){
    e.preventDefault();
    e.stopPropagation();
    dispatch(deletePost(this.model.id));
  }

  edit(e){
    e.preventDefault();
    e.stopPropagation();
    dispatch(navigateEditPost(this.model.id));
  }

  render(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
}
