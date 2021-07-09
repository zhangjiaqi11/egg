const path=require('path')
const fs=require('fs');
class replaceConsole{
    fileName=''
    constructor(fileName){
        // this.fileName=fileName
    }
    fn(){ 
        let that=this
        return new Promise((rej,res)=>{
            fs.stat(that.fileName,function(err,stat){
                if(stat.isFile()){
                    let dataEdit=fs.readFileSync(that.fileName,'utf-8')
                    let rep=/console.log(.*)/g
                    rej(dataEdit.replace(rep,'')) 
                }else{
                    rej(false)
                }
                
            })
        })
        
    }
    async replaceFile(){
        let that=this
        let dataEdit=await that.fn()
        if(dataEdit!==false){
            let fd=fs.openSync(that.fileName,'w')
            fs.writeFileSync(fd,dataEdit,(err)=>{
                if(err)throw err
            })
        }
    }
    init(dirname){
        let that=this
        fs.readdir(dirname,function(err,file){
            file.forEach(v=>{
                that.fileName=path.join(dirname,v)
                that.replaceFile()
            })
        })
    }
}
new replaceConsole().init('./view')
new replaceConsole().init('./components')