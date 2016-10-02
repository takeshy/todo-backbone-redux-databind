export default class ShowView extends Backbone.View{
  get template(){ return require("../../templates/show.ejs"); }

  render(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
}
