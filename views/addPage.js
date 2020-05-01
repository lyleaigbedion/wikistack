const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">

    <div class="form-group">
      <label for="author" class="col-sm-2 control-label">Author</label>
      <div class="col-sm-10">
        <input id="author" name="author" type="text" class="form-control"/>
      </div>

      <label for="email" class="col-sm-2 control-label">Email</label>
      <div class="col-sm-10">
        <input id="email" name="email" type="text" class="form-control"/>
      </div>
    </div>


      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>



      <label for="title" class="col-sm-2 control-label">Content</label>
      <div class="col-sm-10">
        <textarea name="content" id='content'></textarea>
      </div>
    </div>



    <div id="flexy">
    <label for="open" class="col-sm-2 control-label">open</label>
    <input type="radio" id="open" name="openOrClose" value="open">
    <label for="close" class="col-sm-2 control-label">close</label>
    <input type="radio" id="close" name="openOrClose" value="close">
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);
