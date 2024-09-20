module.exports = function(router) {
//routes
//register
router.post("/api/register", async (req, res) => {
    const { email, password } = req.body;
  //if no email found..
    if (!email || !password) {
      return res.status(400).send({ error: "Email and password are required." });
    }
    //creates user
    try {
      const userRecord = await admin.auth().createUser({ email, password });
      res.status(201).send({ uid: userRecord.uid, email: userRecord.email });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(400).send({ error: error.message });
    }
  });
  
  //login
  router.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
    // if no email or password entered
    if (!email || !password) {
      return res.status(400).send({ error: "Email and password are required." });
    }
    // login attempt
    try {
      const userRecord = await admin.auth().getUserByEmail(email);
      res.status(200).send({ uid: userRecord.uid, email: userRecord.email });
    } catch (error) {
      console.error("Error logging in user:", error);
      res.status(400).send({ error: error.message });
    }
  });
}
