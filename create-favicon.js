import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function createFavicon() {
  try {
    const inputPath = '/Users/ngannalo/Downloads/AIOM/ngan-kim-connect-main/public/logo/NK_LOGO.png';
    const outputPath = '/Users/ngannalo/Downloads/AIOM/ngan-kim-connect-main/public/favicon.ico';
    
    // Create multiple sizes for favicon
    const sizes = [16, 32, 48, 64];
    
    console.log('Creating favicon from NK_LOGO.png...');
    
    // Create a multi-size ICO file
    await sharp(inputPath)
      .resize(64, 64, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(outputPath.replace('.ico', '-64.png'));
    
    // For now, let's create a simple PNG favicon as ICO format is complex
    // Most modern browsers support PNG favicons
    await sharp(inputPath)
      .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile('/Users/ngannalo/Downloads/AIOM/ngan-kim-connect-main/public/favicon-32x32.png');
    
    await sharp(inputPath)
      .resize(16, 16, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile('/Users/ngannalo/Downloads/AIOM/ngan-kim-connect-main/public/favicon-16x16.png');
    
    console.log('Favicon created successfully!');
    console.log('Files created:');
    console.log('- /Users/ngannalo/Downloads/AIOM/ngan-kim-connect-main/public/favicon-32x32.png');
    console.log('- /Users/ngannalo/Downloads/AIOM/ngan-kim-connect-main/public/favicon-16x16.png');
    
  } catch (error) {
    console.error('Error creating favicon:', error);
  }
}

createFavicon();