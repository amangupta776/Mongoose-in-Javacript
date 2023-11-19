const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/aman',{
     useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("connection succesful");
}).catch((error)=>{
    console.log(error);
});

const streamNames=new mongoose.Schema({
    Name:String,
    Stream:String,
    Age:Number
});
//collection
const Stream=new mongoose.model("Stream",streamNames);

//create document for inserting one

const createDocumentOne= async()=>{
    const mylist=new Stream({
        Name:"Gourav",
        Stream:"Mca",
        Age:22
    });
    

    const result=await mylist.save();
    console.log(result)
} 
//for inserting Many
const createDocument= async()=>{
    const mylist=new Stream({
        Name:"Gourav",
        Stream:"Mca",
        Age:22
    });
    
    const mylist2=new Stream({
        Name:"Deepak",
        Stream:"Mca",
        Age:21
    });
    const mylist3=new Stream({
        Name:"Akansha",
        Stream:"Mca",
        Age:23
    });
    const result=await Stream.insertMany([mylist,mylist2,mylist3])
    console.log(result);
} 
// createDocument();

//getDocument or read

const getDocument=async()=>{
const result=await Stream.find();
console.log(result);
}
// getDocument();

const updateDocument=async(_id)=>{
    const result=await Stream.findByIdAndUpdate({_id},{
        $set:{
            Name:"Akash"
        }
    }
 
    );
    console.log(result);
}
// updateDocument("651d598eeabd16a5c4d31ea4");

//delete Document

const deleteDocument=async(_id)=>{
    try{
   const result=await Stream.deleteOne({_id});
   console.log(result);
    }catch(error){
        console.log(error);
    }
}

// deleteDocument("651d598eeabd16a5c4d31ea4");