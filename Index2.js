var nodemailer = require('nodemailer');
var http = require('http');

var transporter = nodemailer.createTransport({
 service:'gmail',
  auth: {
    user: 'liomessi6694@gmail.com',
    pass: 'lio@6694'
  }
  
});

var mailOptions = {
  from: 'liomessi6694@gmail.com',
  to: 'abhayshirale27@gmail.com',
  subject: 'Sending Email ',
  text: 'Hello there...'
};


http.createServer(function (req, res) {
    
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write("Email Sucessfully sent");
      sentMail();
      res.end();
    }).listen(8000,'localhost',()=>{
        console.log('Running on 8000...')
    });



function sentMail(){

    transporter.sendMail(mailOptions, function(error, info){

        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}
