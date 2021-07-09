const path=require('path')
const fs=require('fs');
class replaceConsole{
    fileName=''
    rep=''
    constructor(){

    }
    //判断是否为文件
    checkFileType(){ 
        let that=this
        return new Promise((rej,res)=>{
            fs.stat(that.fileName,function(err,stat){
                rej(stat.isFile())                 
            })
        })
        
    }
    //确定替换后的内容
    sureChangeContent(){
        let dataEdit=fs.readFileSync(this.fileName,'utf-8')
        return dataEdit.replace(this.reg,'')
    }
    replaceFile(){
        let dataEdit=this.sureChangeContent()
        let fd=fs.openSync(this.fileName,'w')
        fs.writeFileSync(fd,dataEdit,(err)=>{
            if(err)throw err
        })
    }
    //初始化
    init(dirname,reg){
        let that=this
        this.reg=reg
        fs.readdir(dirname,function(err,file){
            file.forEach(v=>{
                that.fileName=path.join(dirname,v)
                //如果是文件夹，递归执行
                that.checkFileType().then(flag=>{
                    if(flag){
                        that.replaceFile()
                    }else{
                        that.init(`${dirname}/${v}`,that.reg)
                    }
                })
            })
        })
    }
}
new replaceConsole().init('./view',/console.log(.*)/g)
new replaceConsole().init('./components',/console.log(.*)/g)