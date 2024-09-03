// Handle server request

exports.dataHandler = async (req, res) => {
  // Get body data
  const { data } = req.body;

  const splitData = data ? data?.split("").sort() : "Please pass data!";

  // Send server response
  res.status(200).json({ word: splitData });
};
