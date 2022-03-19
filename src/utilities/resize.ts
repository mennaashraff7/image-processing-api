import sharp from 'sharp';
import path from 'path';

const resized = async (
  imgName: string,
  width: number,
  height: number
): Promise<void> => {
  try {
    await sharp(path.resolve('images/' + imgName))
      .resize(width, height)
      .toFile(
        path.resolve('images/thumbnail/' + width + 'x' + height + '-' + imgName)
      );
  } catch (error) {
    console.log(error);
  }
};
export default resized;
