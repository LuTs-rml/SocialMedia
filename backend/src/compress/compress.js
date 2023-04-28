const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

async function resizeImage(inputFile, outputPath, width, height) {
  const fileName = `output-${width}x${height}.jpg`;
  const outputFile = path.join(outputPath, fileName);
  await sharp(inputFile)
    .resize({
      width: width,
      height: height,
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0.5 },
    })
    .toFile(outputFile);
  return outputFile;
}
module.exports = resizeImage;
// Example usage
// const inputFile = "input.jpg";
// const outputPath = "./output/";
// resizeImage(inputFile, outputPath, 800, 1000)
//   .then((outputFile) => {
//     console.log(`Successfully resized image: ${outputFile}`);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
