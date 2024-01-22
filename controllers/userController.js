const User = require("./../models/userModel");

// const users = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/users.json`));

exports.getAllUsers = async (req, res) => {
  try {
    // BUILD QUERY
    const queryObj = { ...req.query };
    const excludedFields = ["lga", "bvn", "agent"];
    excludedFields.forEach(el => delete queryObj[el]);

    const query = User.find(queryObj);

    // EXECUTE QUERY
    const users = await query;

    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        user
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        users: newUser
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: "success",
      data: {
        user
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};
