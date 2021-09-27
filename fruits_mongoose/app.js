const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
   name: String,
   rating: Number,
   review: String 
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit"
});

// apple.save();

const orange = new Fruit({
    name: "Orange",
    rating: 6.5,
    review: "Too sour"
});

// orange.save();

const banana = new Fruit({
    name: "Banana",
    rating: 7.5,
    review: "Weird texture"
});

// banana.save();

// Fruit.insertMany([apple, orange, banana], function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Successfully saved to fruitsDB.")
//     }
// });

Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    }else{
        fruits.forEach(fruit => {
            console.log(fruit.name);
        });
    }
});

// Fruit.deleteMany( {name:"Banana"}, function(err){
    
// });


