import express from 'express';
const app = express();
const port = 5000;
app.get('/', (req, res) => {
    res.send('Hello World with TypeScript!');
});
// app.use("/api/v1", ROUTER);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map