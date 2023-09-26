const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');

app.use(cors());
app.use(bodyparser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'exza2543',
    database: 'myproj',
    port: 3306
});

//check database connection
db.connect(err => {
    if (err) {
        console.log(err, 'dberr');
    } else {
        console.log('database connected...');
    }
})

//get all data
app.get('/product',(req,res)=>{
    let qr = 'select * from product INNER JOIN dealer on product.dealer_id=dealer.dealer_id INNER JOIN type_of_product on product.Tproduct_id=type_of_product.Tproduct_id';
    db.query(qr,(err, result) => {
        if (err) {
            console.log(err, 'errors');
        } if (result.length > 0) {
            res.send({
                message: 'all product data',
                data: result
            });
        }
    });
    console.log('get all product data');
});

//test single data product_id
app.get('/product/:product_id',(req,res)=>{
    let gID = req.params.product_id;
    let qr = 'select * from product where product_id = '+ gID;
    db.query(qr,(err, result) => {
        if (err) {
            console.log(err);
        } if (result.length > 0) {
            res.send({
                message: 'get single data',
                data: result
            });
        } else{
            res.send({
                message: 'data not found'
            });
        }
    });
    console.log('get product_id',req.params.product_id,'completed')
});

//create data ใช้ get ใน postman
app.post('/product',(req,res)=>{
    console.log(req.body,'create data');
    
    let Pid = req.body.product_id;
    let Pname = req.body.product_name;
    let Tproduct = req.body.Tproduct_id;
    let dealerId = req.body.dealer_id;
    let price = req.body.price;
    let cUnit = req.body.c_unit;


    let qr = "insert into product(product_id,product_name,Tproduct_id,dealer_id,price,c_unit) values('"+Pid+"','"+Pname+"','"+Tproduct+"','"+dealerId+"','"+price+"','"+cUnit+"')";
    db.query(qr,(err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result,'result')
        res.send({
            message : 'data insert'
        });
        
    });
});


//update data ใช้ put ใน postman
app.put('/product/:product_id',(req,res)=>{
    console.log(req.body,'updatedata');

    let pID = req.params.product_id; //ส่ง id เข้าไป

    let Pname = req.body.product_name;
    let Tproduct = req.body.Tproduct_id;
    let dealerId = req.body.dealer_id;
    let price = req.body.price;
    let cUnit = req.body.c_unit;

    let qr = "update product set product_name='"+Pname+"', Tproduct_id='"+Tproduct+"', dealer_id='"+dealerId+"', price='"+price+"', c_unit='"+cUnit+"'  where product_id ="+pID;
    db.query(qr,(err,result)=>{
        if(err){console.log(err);}
       console.log(result,'result');
        res.send({
            message:'data update',
        });
    });
});


//delete data ใช้ delete ใน postman
app.delete('/product/:product_id',(req,res)=>{
    let pID = req.params.product_id;
    let qr = 'delete from product where product_id = '+pID;
    db.query(qr,(err,result)=>{
        if(err){console.log(err);}
       //console.log(result,'result');
        res.send({
            message:'data delete',
        });
    });
})

//////employee//////

//get all employee data
app.get('/employee',(req,res)=>{
    let emp = 'select * from employee';
    db.query(emp,(err, result) => {
        if (err) {
            console.log(err, 'errors');
        } if (result.length > 0) {
            res.send({
                message: 'all employee data',
                emp_data: result
            });
        }
    });
    console.log('get all employee data');
});

//test single data employee_id
app.get('/employee/:employee_id',(req,res)=>{
    let empID = req.params.employee_id;
    let qr = 'select * from employee where employee_id = '+ empID;
    db.query(qr,(err, result) => {
        if (err) {
            console.log(err);
        } if (result.length > 0) {
            res.send({
                message: 'get single employee data',
                emp_data: result
            });
        } else{
            res.send({
                message: 'employee data not found'
            });
        }
    });
    console.log('get employee_id',req.params.employee_id,'completed')
});

//create employee data ใช้ get ใน postman
app.post('/employee',(req,res)=>{
    console.log(req.body,'create employee data');
    
    let Eid = req.body.employee_id;
    let Ename = req.body.employee_name;
    let EAddress = req.body.address;
    let ETel = req.body.tel;

    let qr = "insert into employee(employee_id,employee_name,address,tel) values('"+Eid+"','"+Ename+"','"+EAddress+"','"+ETel+"')";
    db.query(qr,(err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result,'result')
        res.send({
            message : 'employee data insert'
        });
        
    });
});

//update employee data ใช้ put ใน postman
app.put('/employee/:employee_id',(req,res)=>{
    console.log(req.body,'updatedata');

    let empID = req.params.employee_id; //ส่ง id เข้าไป
    let Ename = req.body.employee_name;
    let EAddress = req.body.address;
    let ETel = req.body.tel;

    let qr = "update employee set employee_name='"+Ename+"', address='"+EAddress+"', tel='"+ETel+"' where employee_id ="+empID;
    db.query(qr,(err,result)=>{
        if(err){console.log(err);}
       console.log(result,'result');
        res.send({
            message:'employee data update',
        });
    });
});

//delete employee data ใช้ delete ใน postman
app.delete('/employee/:employee_id',(req,res)=>{
    let empID = req.params.employee_id;
    let qr = 'delete from employee where employee_id = '+empID;
    db.query(qr,(err,result)=>{
        if(err){console.log(err);}
       //console.log(result,'result');
        res.send({
            message:'data delete',
        });
    });
})

//dealer//
//get all dealer data
app.get('/dealer',(req,res)=>{
    let emp = 'select * from dealer';
    db.query(emp,(err, result) => {
        if (err) {
            console.log(err, 'errors');
        } if (result.length > 0) {
            res.send({
                message: 'all dealer data',
                dealer_data: result
            });
        }
    });
    console.log('get all employee data');
});

//import_product//
//get all import_product data
app.get('/import_product',(req,res)=>{
    let emp = 'select * from import_product INNER JOIN employee on import_product.employee_id=employee.employee_id INNER JOIN dealer on import_product.dealer_id=dealer.dealer_id INNER JOIN type_of_product on import_product.Tproduct_id=type_of_product.Tproduct_id';
    db.query(emp,(err, result) => {
        if (err) {
            console.log(err, 'errors');
        } if (result.length > 0) {
            res.send({
                message: 'all import_product data',
                import_product_data: result
            });
        }
    });
    console.log('get all import_product data');
});

//test single data import_product
app.get('/import_product/:import_id',(req,res)=>{
    let im_pro_ID = req.params.import_id;
    let qr = 'select * from import_product where import_id = '+ im_pro_ID;
    db.query(qr,(err, result) => {
        if (err) {
            console.log(err);
        } if (result.length > 0) {
            res.send({
                message: 'get single import_product data',
                emp_data: result
            });
        } else{
            res.send({
                message: 'import_product data not found'
            });
        }
    });
    console.log('get import_product_id',req.params.import_id,'completed')
});

//create import_product data ใช้ get ใน postman
app.post('/import_product',(req,res)=>{
    console.log(req.body,'create import_product data');
    
    let imp_pID = req.body.import_id;
    let im_pro_id = req.body.product_id;
    let pro_name = req.body.product_name;
    let emp_id = req.body.employee_id;
    let dealer_id = req.body.dealer_id;
    let DO_IM = req.body.date_of_import;
    let DO_T = req.body.date_of_transport;
    let amount = req.body.amount;
    let price = req.body.price;

    let total  = req.body.total;

    let qr = "insert into import_product(import_id,product_id,product_name,employee_id,dealer_id,date_of_import,date_of_transport,amount,price,total) values('"+imp_pID+"','"+im_pro_id+"','"+pro_name+"','"+emp_id+"','"+dealer_id+"','"+DO_IM+"','"+DO_T+"','"+amount+"','"+price+"','"+total+"')";
    db.query(qr,(err, result) => {
        if (err) {
            console.log(err, "Please fix yor Database");
        }
        console.log(result,'result')
        res.send({
            message : 'import_product data insert'
        });
        
    });
});

//update import_product data
app.put('/import_product/:import_id',(req,res)=>{
    console.log(req.body,'updatedata');

    let imp_pID = req.params.import_id; //ส่ง id เข้าไป
    let im_pro_id = req.body.product_id;
    let pro_name = req.body.product_name;
    let emp_id = req.body.employee_id;
    let dealer_id = req.body.dealer_id;
    let DO_IM = req.body.date_of_import;
    let DO_T = req.body.date_of_transport;
    let amount = req.body.amount;
    let price = req.body.price;
    let total = req.body.total;


    let qr = "update product set product_id='"+im_pro_id+"', product_name='"+pro_name+"', employee_id='"+emp_id+"', dealer_id='"+dealer_id+"', date_of_import='"+DO_IM+"' , date_of_transport='"+DO_T+"' , amount='"+amount+"' , price='"+price+"' , total='"+total+"'  where import_id =" +imp_pID;
    db.query(qr,(err,result)=>{
        if(err){console.log(err);}
       console.log(result,'result');
        res.send({
            message:'data update',
        });
    });
});

app.listen(3000, ()=>{
    console.log('server running.');
});