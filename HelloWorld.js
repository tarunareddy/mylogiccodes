
class SampleController{
     
    printHelloWorld=(request,res)=>{
        console.log("called")
        
         res.status(200).json("Hello World")   
    }  
  }
    const sampctrl = new SampleController();
    export default sampctrl;