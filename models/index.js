const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    isUrl: false,
    isEmail: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmail: true,
    isUrl: false,
    unique: true,
  }
});

const Page = db.define('page', {
  title : {
    type: Sequelize.STRING,
    allowNull: false,
    // validate: {
    //   isUrl: false,
    //   isEmail: false
    // }
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
    //isUrl: false,
    //isEmail: false

  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open','closed'),
  }

})
function createSlug (title){
  let slug = ""
  let alpha = `abcdefghijklmnopqrstuvwxyz`;
  title = title.toLowerCase();

  for(let i = 0; i < title.length; i++){
    let char = title[i];
    if(char === " "){
      slug+= "-";
    }else if(alpha.indexOf(char) >= 0){
      slug+= char;
    }
  }
  return slug;
}

Page.beforeValidate( pages =>{

  if(!pages.slug){
    pages.slug = createSlug(pages.title);
  }
  console.log(pages)

});




module.exports = { db, Page, User };

