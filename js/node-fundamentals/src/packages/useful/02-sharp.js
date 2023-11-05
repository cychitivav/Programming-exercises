const sharp = require("sharp");

sharp("anyImage.webp").resize(80).grayscale().toFile("output.webp");
