export default class PostView extends Backbone.View{
  get template(){ return require("../../templates/post.ejs") }
  get events(){
    return {
    "click .destroy" : "destroy"
    };
  }
  get tagName(){ return "tr"; }

  initialize(){
    super.initialize();
    this.listenTo(this.model,'destroy', this.remove)
    this.listenTo(this.model,'change', this.render)
  }

  destroy(e){
    e.preventDefault();
    e.stopPropagation();
    this.model.destroy();
    window.router.navigate("/index",{trigger: true});
  }

  render(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
}
