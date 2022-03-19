import fs from 'fs';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import validation from './utilities/validation';
import resized from './utilities/resize';

const app = express();
const port = 3000;

//endpoint
app.get('/api', validation, async (req, res) => {
  const imgName: string = req.query.imgName as unknown as string;
  const width: number = parseInt(req.query.width as string);
  const height: number = parseInt(req.query.height as string);
  const imgPath = 'images/thumbnail/' + width + 'x' + height + '-' + imgName;
  try {
    if (fs.existsSync(imgPath)) {
      //file exists

      res.sendFile(
        path.resolve('images/thumbnail/' + width + 'x' + height + '-' + imgName)
      );
    } else {
      await resized(imgName, width, height);
      res.sendFile(
        path.resolve('images/thumbnail/' + width + 'x' + height + '-' + imgName)
      );
    }
  } catch (err) {
    console.error(err);
  }
});
//app.use('/api', resizePic);
app.use(morgan('tiny'));

app.listen(port, () => {
  console.log('main server');
});

export default app;
