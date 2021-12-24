var mysql = require('mysql');

exports.dbhome = async (req, res) => {
    try {
        var id = req.query.id;
        console.log(id);
        var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: ""
        });
        con.connect(function (err) {
          if (err) throw err;
          con.query("SELECT * FROM wordpress.wp_options where option_id="+id+" limit 0,10", function (err, result) {
            if (err) throw err;
            res.render('../views/mycontroller_view', { title: 'This is home page',data:result });
          });
        });
    }
    catch(error) {
        return "";
    }
}
