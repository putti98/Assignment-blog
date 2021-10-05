import { Component } from "react";

class ArticleComp extends Component{
    render(){
        return <article>
                    <div class="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          <a className="p-2 text-muted" href="#">World</a>
          <a className="p-2 text-muted" href="#">U.S.</a>
          <a className="p-2 text-muted" href="#">Technology</a>
          <a className="p-2 text-muted" href="#">Design</a>
          <a className="p-2 text-muted" href="#">Culture</a>
          <a className="p-2 text-muted" href="#">Business</a>
          <a className="p-2 text-muted" href="#">Politics</a>
          <a className="p-2 text-muted" href="#">Opinion</a>
          <a className="p-2 text-muted" href="#">Science</a>
          <a className="p-2 text-muted" href="#">Health</a>
          <a className="p-2 text-muted" href="#">Style</a>
          <a className="p-2 text-muted" href="#">Travel</a>
        </nav>
      </div>

      <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">Title of a longer featured blog post</h1>
          <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
          <p className="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue reading...</a></p>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-md-6">
          <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary">World</strong>
              <h3 className="mb-0">
                <a className="text-dark" href="#">Featured post</a>
              </h3>
              <div className="mb-1 text-muted">Nov 12</div>
              <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#">Continue reading</a>
            </div>
            <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Card image cap"></img>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-success">Design</strong>
              <h3 className="mb-0">
                <a className="text-dark" href="#">Post title</a>
              </h3>
              <div className="mb-1 text-muted">Nov 11</div>
              <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="">Continue reading</a>
            </div>
            <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Card image cap"></img>
          </div>
        </div>
      </div> 
    </article>
    }
}

export default ArticleComp;