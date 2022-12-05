const userSchema = require('../Schema/userSchema');

const RegisterPostRequest = async (req, res) => {
  console.log(req.body)
  try {
    const { firstName, lastName, email, phoneNo, password,rollSelect } = req.body;
    const existEmail = await userSchema.findOne({ email: email });
    console.log(existEmail, 'existEmail');
    if (existEmail) {
      res.status(500).json('email is already exists');
    } else if (existEmail === null) {
      const user = await userSchema({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNo: phoneNo,
        password: password,
        rollSelect:rollSelect
      });

      res.status(200).json({message:"You are Registered Successfully"});
     
      await user.save();
    }
  } catch (error) {
    res.status(404).json('Invalid Credentials');
    console.log(error);
  }
};

const SignInPostRequest = async (req, res) => {
  console.log(req.body);
  try {
    const loginUser = await userSchema.findOne({
      email: req.body.email,
      password: req.body.password,
    });
 
    if (
      loginUser.email === req.body.email &&
      loginUser.password === req.body.password
    ) {
      res.status(200).json({ message: 'Login Successfully',User:loginUser });
    } else {
      res.status(404).json({ message: 'Invalid Credidfjdfdsf' });
    }
  } catch (error) {
    res.status(404).json('invalid Credentials');
  }
};
const verifyEmail = async (req, res) => {
  console.log(req.body);
  try {
    const email = await userSchema.findOne({ email: req.body.email });
    console.log(email, 'email');
    if (email) {
      res.status(200).json('Your Email IS Verified');
    } else {
      res.status(404).json('Your Email is not Exists');
    }
  } catch (error) {
    res.status(404).json('Your Email is not exists');
  }
};
const newPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    const id = req.params.id;
    console.log(req.params, 'params');
    console.log(req.body, 'body');
    const updatedData = await userSchema.findOneAndUpdate(
      { email: email },
      {
        email: email,
        password: password,
      }
    );
    if (updatedData) {
      res.status(200).json(updatedData);
      console.log('updated');
    }
  } catch (error) {
    console.log(error, 'erorrrrrrr');
    res.status(400).json('not Updated');
  }
};

module.exports = {
  RegisterPostRequest,
  SignInPostRequest,
  verifyEmail,
  newPassword,
};
