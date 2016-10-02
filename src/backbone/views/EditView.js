export default class EditView extends Backbone.View {
  get template(){ return require("../../templates/edit.ejs"); }

  get events(){
    return {
      "submit #edit-post" : "update",
      "change #title": "changeTitle",
      "change #content": "changeContent"
    }
  }

  changeTitle(e){
    this.model.set("title",e.target.value);
  }

  changeContent(e){
    this.model.set("content",e.target.value);
  }

  update(e){
    e.preventDefault();
    e.stopPropagation();
    window.location.hash = `/${this.model.id}`;
  }

  render(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
}
