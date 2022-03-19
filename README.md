# image-processing-api
An app that can be used to fetch an image and have it processed to multiple sizes that could be useful for web page images. After the image is processed , the newly generated images are cashed on the disk along with the original images so if same image is requested more than one time it won't be needed to resize it again.

Technologies used in this project  Node.js, Express, TypeScript, fileSystem for files, Sharp for image processing, Jasmine for Unit Testing, prettier/lint for code quality, middle-ware for validation of the request.

The url used to test http://localhost:3000/api?imgName=fjord.jpg&width=100&height=500

The Node.js scripts that exist in the package.json file include: npm run lint for using eslint for code linting; npm run build to use TypeScript to build the build production folder, npm run prettier to format files; npm run start for starting the development server with Nodemon; npm run test will do a production build, and runs the Jasmine Unit Tests. The main focus of the tests is to verify API endpoint return HTTP status of 200, and verify generated resized images.
