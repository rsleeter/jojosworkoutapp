const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose');
const url = 'mongodb://localhost/blogDb';

const User = require('./model/user');
const Workout = require('./model/workout');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

app.post('/api/user/login', (req, res) => {
	mongoose.connect(url,{ useMongoClient: true }, function(err){
		if(err) throw err;
		User.find({
			username : req.body.username, password : req.body.password
		}, function(err, user){
			if(err) throw err;
			if(user.length === 1){	
				return res.status(200).json({
					status: 'success',
					data: user
				})
			} else {
				return res.status(200).json({
					status: 'fail',
					message: 'Login Failed'
				})
			}
			
		})
	});
})

app.post('/api/user/create', (req, res) => {
    mongoose.connect(url, function(err){
	if(err) throw err;
	const user = new User({
		name: req.body.name,
		username: req.body.username,
		password: req.body.password
	})
	user.save((err, res) => {
			if(err) throw err;
			return res.status(200).json({
				status: 'success',
				data: res
			})
		})
	});
})

app.post('/api/workout/createWorkout', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function(err){
	    if(err) throw err;
	    const workout = new Workout({
		    title: req.body.title,
		    description: req.body.description,
		    trainer: req.body.trainer,
		    summary: req.body.summary,
		    tags: req.body.tags,
		    lastused: req.body.lastused,
		    lastclass: req.body.lastclass,
		    type: req.body.type
		})
	    workout.save((err, doc) => {
		    if(err) throw err;
		    return res.status(200).json({
			    status: 'success',
				data: doc
				})
		})
	});
})

app.post('/api/workout/updateWorkout', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function(err){
	    if(err) throw err;
	    Workout.update(
               {_id: req.body.id },
               { title : req.body.title, 
                 description: req.body.description, 
                 summary: req.body.summary, 
                 trainer: req.body.trainer, 
		       lastused: req.body.lastused, 
		       lastclass: req.body.lastclass, 
		       type: req.body.type,
		       tags: req.body.tags},
	       (err, doc) => {
	       if(err) throw err;
	       return res.status(200).json({
		    status: 'success',
		    data: doc
		})
	     })
	});
})


app.post('/api/workout/deleteWorkout', (req, res) => {
    mongoose.connect(url, { useMongoClient: true } , function(err){
    if(err) throw err;
    Workout.findByIdAndRemove(req.body.id,
        (err, doc) => {
        if(err) throw err;
        return res.status(200).json({
	  status: 'success',
          data:doc
         })
      })
   });
})

app.post('/api/workout/getWorkout', (req, res) => {
    mongoose.connect(url, { useMongoClient: true } , function(err){
    if(err) throw err;
    Workout.findById(req.body.id,
        (err, doc) => {
        if(err) throw err;
        return res.status(200).json({
	  status: 'success',
          data:doc
         })
      })
   });
})

app.post('/api/workout/getAllWorkout', (req, res) => {
	    mongoose.connect(url, { useMongoClient: true } , function(err){
		    if(err) throw err;
		    Workout.find({},[],{ sort: { _id: -1 } },(err, doc) => {
			    if(err) throw err;
			    return res.status(200).json({
				    status: 'success',
					data: doc
					})
			})
		});
	})



app.listen(3000, () => console.log('Blog server running on port 3000!'))