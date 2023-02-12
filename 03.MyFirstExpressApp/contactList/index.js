const { renderFile } = require('ejs');
const { urlencoded } = require('express');
const express = require('express');
const path = require('path');
const port = 8000;

const app = express();
app.use(express.urlencoded());
app.use(express.static('assets'));

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'))

app.use((req,res,next)=>{
    // req.myName = "Arpan";
    // console.log("Middleware 1 is called");
    next();
});

app.use(function(req,res,next){
    // console.log("My name from Mw2 is",req.myName);
    // console.log("Middleware 2 is called");
    next();
})

var contactList = [
    {
        name: "Akash",
        phone: 7008494644
    },
    {
        name: "Jyoti",
        phone: 814454776
    },
    {
        name: "Kiran",
        phone: 789382837
    },
    {
        name: "Mamata",
        phone: 9861125080
    },
    {
        name: "Rama",
        phone: 3948938448
    }
];
app.get('/',function(req,res){
    // console.log("From the get router controller",req.myName);
    return res.render('home',{
        title:"Contact List",
        contact_list: contactList
    });
});

app.get('/practice',function(req,res){
    return res.render('practice',{
        title : "Practice"
    })
})

app.get('/delete-contact/:phone',function(req,res){
    // console.log(req.params);
    let phone = req.params.phone;
    // console.log(phone);
    let contactIndex = contactList.findIndex(contact => contact.phone == phone);

    if(contactIndex!=-1){
        contactList.splice(contactIndex,1);
    }
    return res.redirect('back');
})

app.post('/create-contact',function(req,res){
    contactList.push({
        name:req.body.name,
        phone:req.body.phone
    })
    return res.redirect('/');
})

app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is running on port:",port);
})