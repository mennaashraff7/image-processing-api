import express from 'express';
import fs from 'fs';

const validation = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  const imgName = req.query.imgName;
  const width = req.query.width;
  const height = req.query.height;
  if (!imgName) {
    res.send('please insert the missing field');
  }
  if (!width) {
    res.send('please insert the missing field');
  }
  if (!height) {
    res.send('please insert the missing field');
  }
  if (parseInt(width as string) <= 0 || parseInt(height as string) <= 0) {
    res.send('please insert positive values');
  }
  if (isNaN(parseInt(width as string)) || isNaN(parseInt(height as string))) {
    res.send('please insert a number for the dimensions!!!!!!!!!');
  }
  try {
    if (!fs.existsSync('images/' + imgName)) {
      //file exists
      res.send('please insert available image name');
    }
  } catch (error) {
    res.send(error);
  }
  next();
};
export default validation;
