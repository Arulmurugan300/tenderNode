const { List } = require('../model/list');
const getAlLlist = async (req, res) => {
  try {

  }
  catch (err) {

  }
}
module.exports.getAlLlist = getAlLlist;

const createList = async (req, res) => {
  try {
    const { fileName, description, uploadFile } = req.body;
    if (!fileName || !uploadFile) {
      throw new Error("Please fill mandatory fileds");
    }
    const response = new List({ fileName: fileName, description: description, uploadFile: uploadFile });
    const save = await response.save();
    const send = {
      fileName: save.fileName,
      description: save.description,
      status: "successfully saved"
    }
    res.status(200).json(send);
  }
  catch (err) {
    res.status(400).json({ error: err.message })
  }
}
module.exports.createList = createList;