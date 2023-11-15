const typed = new Typed(".field",{
    strings: ['Software Developer !','Frontend Developer !','Web Developer !', 'Full Stack Developer !'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop:true
});

const typed1 = new Typed(".dots",{
    strings: ['....'],
    typeSpeed: 150,
    startDelay: 1000,
    backDelay: 1000,
    loop:true
});
console.log(document.getElementById('message').value);

function sendMail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "suryanshkapoorji@gmail.com",
        Password : "4B8B04078154A77634B4662176025BC06F40",
        To : 'sk21062000@gmail.com',
        From : 'suryanshkapoorji@gmail.com',
        Subject : 'Contact From Portfolio Site',
        Body : {from :document.getElementById('email').value , About : document.getElementById('subject').value ,  Message :  document.getElementById('message').value}
    }).then(
      message => alert(message)
    )
}
