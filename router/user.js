// const FS = require('fs');
//const mongodb = require("../unit/mongodb");
const { avatarImage } = require("../unit/uploadFile");
const router = require("express").Router();


router.post("/avatar", avatarImage, (req, res) => result_post_avatar(req, res));
async function result_post_avatar(req, res) {
	let file_dir = req.body.file;
	if (file_dir) res.json({ code: 0, msg: "上传成功", avatar: file_dir });
	else res.json({ code: 1, msg: "操作失败" });
  
}


router.post("/savedata",(req, res) => saveData(req,res));
async function saveData(req,res){
/*	let insert = await mongodb.insertOne("userdata", req.body);
	if (insert) 
		res.json({ code: 0, msg: "数据添加成功" });
	else 
		res.json({ code: 1, msg: "操作失败" });*/
    global.userChageData.push(req.body);
    res.json({ code: 0, msg: "数据添加成功" });
}

router.post("/getList",(req, res) => getchatData(req,res));
async function getchatData(req,res){
	res.json({code:0,data:global.userChageData});
}
module.exports = router;
