const tf = require("@tensorflow/tfjs-node");
async function loadModel() {
  return tf.loadGraphModel(
    "https://storage.googleapis.com/bucket-ml-app/model.json"
  );
}
module.exports = loadModel;
