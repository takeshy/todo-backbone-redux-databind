export class Post extends Backbone.Model{
  get defaults(){ return { title: null, content: null }; }
}

export class PostsCollection extends Backbone.Collection {
  get model(){ return Post }
  initialize() {
    const posts = localStorage.getItem('posts');
    if(posts){
      this.set(JSON.parse(posts));
    }
  }
}
