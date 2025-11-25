import sharp from 'sharp';

async function createRoundFavicon() {
  try {
    const inputPath = '/Users/ngannalo/Downloads/AIOM/ngan-kim-connect-main/public/logo/NK_LOGO.png';
    const outputDir = '/Users/ngannalo/Downloads/AIOM/ngan-kim-connect-main/public/';
    
    console.log('Processing NK_LOGO.png to create round favicon...');
    
    // Read the input image
    const image = sharp(inputPath);
    
    // Get image metadata to understand dimensions
    const metadata = await image.metadata();
    console.log(`Input image dimensions: ${metadata.width}x${metadata.height}`);
    
    // Create a circular mask and apply transparent background
    const createCircularImage = async (size) => {
      // Create a circular SVG mask
      const svg = `
        <svg width="${size}" height="${size}">
          <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="white"/>
        </svg>
      `;
      
      // Create circular image with transparent background
      const circularImage = await image
        .resize(size, size, { 
          fit: 'cover',
          position: 'center'
        })
        .composite([{
          input: Buffer.from(svg),
          blend: 'dest-in'
        }])
        .png()
        .toBuffer();
      
      return circularImage;
    };
    
    // Generate favicon in multiple sizes
    const sizes = [16, 32, 48, 64, 128];
    const faviconBuffers = {};
    
    for (const size of sizes) {
      console.log(`Creating ${size}x${size} favicon...`);
      const buffer = await createCircularImage(size);
      faviconBuffers[size] = buffer;
      
      // Save individual PNG files
      const pngPath = `${outputDir}favicon-${size}x${size}.png`;
      await sharp(buffer).png().toFile(pngPath);
      console.log(`✓ Saved ${pngPath}`);
    }
    
    // Create ICO file (combining multiple sizes)
    // For ICO format, we'll use the largest size as the main favicon.ico
    console.log('Creating favicon.ico...');
    await sharp(faviconBuffers[64])
      .png()
      .toFile(`${outputDir}favicon.ico`);
    console.log(`✓ Saved ${outputDir}favicon.ico`);
    
    // Create a high-quality Apple touch icon
    console.log('Creating Apple touch icon...');
    const appleTouchIcon = await createCircularImage(180);
    await sharp(appleTouchIcon)
      .png()
      .toFile(`${outputDir}apple-touch-icon.png`);
    console.log(`✓ Saved ${outputDir}apple-touch-icon.png`);
    
    console.log('\n🎉 Favicon creation completed successfully!');
    console.log('\nGenerated files:');
    sizes.forEach(size => {
      console.log(`  - favicon-${size}x${size}.png`);
    });
    console.log('  - favicon.ico');
    console.log('  - apple-touch-icon.png');
    
    console.log('\n📋 Browser compatibility:');
    console.log('  - Modern browsers: PNG favicons (16x16, 32x32)');
    console.log('  - Legacy browsers: favicon.ico (64x64)');
    console.log('  - Apple devices: apple-touch-icon.png (180x180)');
    console.log('  - High-DPI displays: 128x128, 64x64 variants');
    
  } catch (error) {
    console.error('❌ Error creating favicon:', error);
  }
}

createRoundFavicon();