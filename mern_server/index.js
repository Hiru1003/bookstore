const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

// middlewear 
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World! ')
})

// mongodb confiq here
const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const uri = "mongodb+srv://mern-bookstore:zrv0tdYJbu9V8Hu3@cluster0.hcvzaho.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    const bookCollections = client.db("BookInventory").collection("Books");

    // Insert a book to db: POST method
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await bookCollections.insertOne(data);
      res.send(result);
    });

    // Get all books from db
    app.get("/all-books", async (req, res) => {
      const books = await bookCollections.find().toArray();
      res.send(books);
    });

    // Update a book: PATCH method
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: {
          ...updateBookData
        }
      };
      const options = { upsert: true };

      // Update now
      const result = await bookCollections.updateOne(filter, updatedDoc, options);
      res.send(result);
    });

    // Delete a book: DELETE method
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.deleteOne(filter);
      res.send(result);
    });

    // Get a single book by ID: GET method
    app.get("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.findOne(filter);
      res.send(result);
    });

    // Find books by category
    app.get("/books-by-category", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category };
      }
      const result = await bookCollections.find(query).toArray();
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});