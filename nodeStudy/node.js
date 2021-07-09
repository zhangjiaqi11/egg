const path=require('path')
const fs=require('fs');
class replaceConsole{
    fileName=''
    constructor(){

    }
    //判断是否为文件
    checkFileType(){ 
        let that=this
        return new Promise((rej,res)=>{
            fs.stat(that.fileName,function(err,stat){
                if(stat.isFile()){
                    rej(true) 
                }else{
                    rej(false)
                }
                
            })
        })
        
    }
    //确定替换后的内容
    sureChangeContent(){
        let dataEdit=fs.readFileSync(this.fileName,'utf-8')
        let rep=/console.log(.*)/g
        return dataEdit.replace(rep,'')
    }
    async replaceFile(){
        let that=this
        let dataEdit=await that.sureChangeContent()
        if(dataEdit!==false){
            let fd=fs.openSync(that.fileName,'w')
            fs.writeFileSync(fd,dataEdit,(err)=>{
                if(err)throw err
            })
        }
    }
    //初始化
    init(dirname){
        let that=this
        fs.readdir(dirname,function(err,file){
            file.forEach(v=>{
                that.fileName=path.join(dirname,v)
                //如果是文件夹，递归执行
                that.checkFileType().then(flag=>{
                    if(flag){
                        that.replaceFile()
                    }else{
                        that.init(`${dirname}/${v}`)
                    }
                })
            })
        })
    }
}
new replaceConsole().init('./view')
new replaceConsole().init('./components')