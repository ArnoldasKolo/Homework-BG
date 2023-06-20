const HomeWorkModel = require("../models/homework");
const uniqid = require("uniqid");

module.exports.INSERT_HOMEWORK = async (req, res) => {
  const homework = new HomeWorkModel({
    id: uniqid(),
    courseSubject: req.body.courseSubject ,
    endDate:req.body.endDate ,
    settlement:req.body.settlement ,
    form:req.body.form ,
    description: req.body.description,
  });

  const savedHomeWork = await homework.save();

  res.status(200).json({ response: savedHomeWork });
};

module.exports.GET_ALL_HOMEWORKS = async (req, res) => {
  const homeworks = await HomeWorkModel.find();
  res.status(200).json({ homeworks: homeworks });
};

module.exports.GET_HOMEWORK = async (req, res) => {
    const homework = await HomeWorkModel.find({ id: req.params.id });
    res.status(200).json({ response: homework });
  };



module.exports.DELETE_HOMEWORK = async (req, res) => {
  await HomeWorkModel.deleteOne({ id: req.params.id });
  res.status(200).json({ response: "Homework was deleted" });
};
