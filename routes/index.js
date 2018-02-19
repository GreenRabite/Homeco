module.exports = (app) => {
  app.get("/", (req, res)=> {
    // res.sendfile('../views/index.html');
    return res.render('index');
  });
}
