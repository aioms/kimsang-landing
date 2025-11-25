import sharp from 'sharp';

async function createMicrosoftTile() {
  try {
    const inputPath = '/Users/ngannalo/Downloads/AIOM/ngan-kim-connect-main/public/logo/NK_LOGO.png';
    const outputPath = '/Users/ngannalo/Downloads/AIOM/ngan-kim-connect-main/public/favicon-144x144.png';
    
    console.log('Creating 144x144 Microsoft tile favicon...');
    
    // Create circular image for Microsoft tile
    const size = 144;
    const svg = `
      <svg width="${size}" height="${size}">
        <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="white"/>
      </svg>
    `;
    
    await sharp(inputPath)
      .resize(size, size, { 
        fit: 'cover',
        position: 'center'
      })
      .composite([{
        input: Buffer.from(svg),
        blend: 'dest-in'
      }])
      .png()
      .toFile(outputPath);
    
    console.log(`✓ Created ${outputPath}`);
    
  } catch (error) {
    console.error('❌ Error creating Microsoft tile:', error);
  }
}

createMicrosoftTile();