import app from './app';
//
// start server
app.listen(process.env.APP_PORT, () => {
    console.log(`${process.env.APP_NAME} started at port: 3000`);
});