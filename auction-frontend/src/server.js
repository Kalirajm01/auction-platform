const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = express();

mongoose.connect('mongodb://localhost/auction_platform', { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['Buyer', 'Seller', 'Admin'], required: true },
});

const UserModel = mongoose.model('User', UserSchema);

app.use(express.json());

app.post('/api/users/registration', async (req, res) => {
  const { username, password, email, role } = req.body;

  try {
    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username,
      password: hashedPassword,
      email,
      role,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error during user registration. Please try again.' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
