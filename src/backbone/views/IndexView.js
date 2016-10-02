import PostView from './PostView';
import $ from 'jquery';
export default class IndexView extends Backbone.View {
  get template(){ return require("../../templates/index.ejs") }

  initialize(){
    this.childViews = [];
    this.listenTo(this.collection,'change', this.addOne)
  }

  addAll(){
    this.collection.each((post)=> this.addOne(post));
  }

  addOne(post){
    const view = new PostView({model : post});
    this.$("tbody").append(view.render().el);
    this.childViews.push(view)
  }

  remove(){
    this.childViews.forEach((view)=> view.remove());
    super.remove();
  }

  render(){
    $(this.el).html(this.template());
    this.addAll();
    return this;
  }
}
