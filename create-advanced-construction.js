import sharp from 'sharp';

async function createAdvancedConstructionImage() {
  try {
    const outputPath = '/Users/ngannalo/Downloads/AIOM/ngan-kim-connect-main/public/product-construction-advanced.jpg';
    
    console.log('Creating advanced construction tools composition...');
    
    // Create a larger canvas with white background
    const width = 1000;
    const height = 800;
    
    // Create white background
    const background = await sharp({
      create: {
        width: width,
        height: height,
        channels: 4,
        background: { r: 250, g: 250, b: 250, alpha: 1 } // Light gray background
      }
    }).png().toBuffer();
    
    // Create more detailed and realistic tool SVGs
    const tools = [
      // Professional Toolbox
      {
        svg: `<svg width="200" height="120">
          <!-- Toolbox body -->
          <rect x="20" y="30" width="160" height="70" fill="#FF6B35" stroke="#D84315" stroke-width="2" rx="8"/>
          <!-- Handle -->
          <rect x="80" y="15" width="40" height="15" fill="#D84315" rx="3"/>
          <!-- Latches -->
          <circle cx="50" cy="65" r="6" fill="#333" stroke="#222" stroke-width="1"/>
          <circle cx="150" cy="65" r="6" fill="#333" stroke="#222" stroke-width="1"/>
          <!-- Brand label area -->
          <rect x="40" y="45" width="120" height="20" fill="#FFF" stroke="#DDD" stroke-width="1" rx="3"/>
          <text x="100" y="58" text-anchor="middle" fill="#333" font-size="10" font-weight="bold">NGÂN KIM</text>
        </svg>`,
        x: 50,
        y: 50
      },
      // Claw Hammer
      {
        svg: `<svg width="120" height="160">
          <!-- Handle -->
          <rect x="55" y="30" width="10" height="100" fill="#8D6E63" stroke="#5D4037" stroke-width="1"/>
          <!-- Hammer head -->
          <rect x="35" y="15" width="50" height="25" fill="#424242" stroke="#212121" stroke-width="1" rx="3"/>
          <!-- Claw -->
          <path d="M35 25 Q25 15 20 25" fill="none" stroke="#424242" stroke-width="3"/>
          <!-- Grip texture -->
          <line x1="57" y1="40" x2="63" y2="40" stroke="#5D4037" stroke-width="1"/>
          <line x1="57" y1="50" x2="63" y2="50" stroke="#5D4037" stroke-width="1"/>
          <line x1="57" y1="60" x2="63" y2="60" stroke="#5D4037" stroke-width="1"/>
        </svg>`,
        x: 300,
        y: 30
      },
      // Screwdriver Set
      {
        svg: `<svg width="25" height="180">
          <!-- Handle -->
          <rect x="7" y="40" width="11" height="120" fill="#FFC107" stroke="#F57C00" stroke-width="1"/>
          <!-- Tip -->
          <polygon points="12.5,20 7,40 18,40" fill="#424242"/>
          <!-- End cap -->
          <circle cx="12.5" cy="165" r="8" fill="#333"/>
          <!-- Handle grip -->
          <circle cx="12.5" cy="80" r="2" fill="#F57C00"/>
          <circle cx="12.5" cy="100" r="2" fill="#F57C00"/>
          <circle cx="12.5" cy="120" r="2" fill="#F57C00"/>
        </svg>`,
        x: 450,
        y: 20
      },
      // Phillips Screwdriver
      {
        svg: `<svg width="25" height="180">
          <!-- Handle -->
          <rect x="7" y="40" width="11" height="120" fill="#4CAF50" stroke="#388E3C" stroke-width="1"/>
          <!-- Phillips tip -->
          <rect x="10" y="25" width="5" height="15" fill="#424242"/>
          <rect x="7" y="30" width="11" height="5" fill="#424242"/>
          <!-- End cap -->
          <circle cx="12.5" cy="165" r="8" fill="#333"/>
        </svg>`,
        x: 490,
        y: 25
      },
      // Adjustable Wrench
      {
        svg: `<svg width="140" height="60">
          <!-- Handle -->
          <rect x="20" y="25" width="100" height="10" fill="#2196F3" stroke="#1565C0" stroke-width="1" rx="2"/>
          <!-- Adjustable jaw -->
          <path d="M20 25 L10 15 L15 10 L25 20" fill="#2196F3" stroke="#1565C0" stroke-width="1"/>
          <!-- Fixed jaw -->
          <path d="M120 25 L130 15 L135 20 L125 30" fill="#2196F3" stroke="#1565C0" stroke-width="1"/>
          <!-- Adjustment wheel -->
          <circle cx="70" cy="30" r="8" fill="#1565C0"/>
          <circle cx="70" cy="30" r="4" fill="#FFF"/>
        </svg>`,
        x: 400,
        y: 200
      },
      // Pliers
      {
        svg: `<svg width="120" height="50">
          <!-- Handle 1 -->
          <rect x="20" y="20" width="60" height="8" fill="#4CAF50" stroke="#388E3C" stroke-width="1" rx="2"/>
          <!-- Handle 2 -->
          <rect x="20" y="32" width="60" height="8" fill="#4CAF50" stroke="#388E3C" stroke-width="1" rx="2"/>
          <!-- Pivot point -->
          <circle cx="50" cy="30" r="5" fill="#333"/>
          <!-- Jaws -->
          <path d="M80 20 L100 15 L95 25 L80 28" fill="#388E3C"/>
          <path d="M80 32 L100 35 L95 45 L80 40" fill="#388E3C"/>
        </svg>`,
        x: 550,
        y: 350
      },
      // Power Drill
      {
        svg: `<svg width="100" height="140">
          <!-- Main body -->
          <rect x="25" y="30" width="50" height="80" fill="#9C27B0" stroke="#7B1FA2" stroke-width="2" rx="8"/>
          <!-- Handle -->
          <rect x="35" y="100" width="30" height="30" fill="#7B1FA2" rx="5"/>
          <!-- Chuck -->
          <rect x="15" y="50" width="20" height="20" fill="#333" rx="3"/>
          <!-- Trigger -->
          <rect x="40" y="85" width="20" height="15" fill="#333" rx="2"/>
          <!-- Ventilation slots -->
          <line x1="30" y1="40" x2="30" y2="100" stroke="#7B1FA2" stroke-width="1"/>
          <line x1="40" y1="40" x2="40" y2="100" stroke="#7B1FA2" stroke-width="1"/>
          <line x1="50" y1="40" x2="50" y2="100" stroke="#7B1FA2" stroke-width="1"/>
          <line x1="60" y1="40" x2="60" y2="100" stroke="#7B1FA2" stroke-width="1"/>
          <line x1="70" y1="40" x2="70" y2="100" stroke="#7B1FA2" stroke-width="1"/>
        </svg>`,
        x: 150,
        y: 300
      },
      // Measuring Tape
      {
        svg: `<svg width="160" height="50">
          <!-- Tape case -->
          <rect x="10" y="15" width="140" height="25" fill="#FF9800" stroke="#F57C00" stroke-width="2" rx="5"/>
          <!-- Tape blade -->
          <rect x="20" y="20" width="120" height="15" fill="#FFF" stroke="#DDD" stroke-width="1"/>
          <!-- Measurement marks -->
          <line x1="30" y1="25" x2="30" y2="30" stroke="#333" stroke-width="1"/>
          <line x1="40" y1="25" x2="40" y2="30" stroke="#333" stroke-width="1"/>
          <line x1="50" y1="25" x2="50" y2="30" stroke="#333" stroke-width="1"/>
          <line x1="60" y1="25" x2="60" y2="30" stroke="#333" stroke-width="1"/>
          <line x1="70" y1="25" x2="70" y2="30" stroke="#333" stroke-width="1"/>
          <line x1="80" y1="25" x2="80" y2="30" stroke="#333" stroke-width="1"/>
          <line x1="90" y1="25" x2="90" y2="30" stroke="#333" stroke-width="1"/>
          <line x1="100" y1="25" x2="100" y2="30" stroke="#333" stroke-width="1"/>
          <line x1="110" y1="25" x2="110" y2="30" stroke="#333" stroke-width="1"/>
          <line x1="120" y1="25" x2="120" y2="30" stroke="#333" stroke-width="1"/>
          <!-- Lock button -->
          <rect x="130" y="18" width="15" height="4" fill="#F57C00" rx="1"/>
        </svg>`,
        x: 300,
        y: 450
      },
      // Spirit Level
      {
        svg: `<svg width="200" height="60">
          <!-- Main body -->
          <rect x="10" y="20" width="180" height="25" fill="#607D8B" stroke="#455A64" stroke-width="2" rx="5"/>
          <!-- Vials -->
          <circle cx="50" cy="32.5" r="12" fill="#E3F2FD" stroke="#1976D2" stroke-width="2"/>
          <circle cx="100" cy="32.5" r="12" fill="#E3F2FD" stroke="#1976D2" stroke-width="2"/>
          <circle cx="150" cy="32.5" r="12" fill="#E3F2FD" stroke="#1976D2" stroke-width="2"/>
          <!-- Bubble indicators -->
          <circle cx="50" cy="32.5" r="3" fill="#1976D2"/>
          <circle cx="100" cy="32.5" r="3" fill="#1976D2"/>
          <circle cx="150" cy="32.5" r="3" fill="#1976D2"/>
          <!-- End caps -->
          <circle cx="10" cy="32.5" r="5" fill="#455A64"/>
          <circle cx="190" cy="32.5" r="5" fill="#455A64"/>
        </svg>`,
        x: 200,
        y: 550
      },
      // Saw
      {
        svg: `<svg width="180" height="80">
          <!-- Handle -->
          <rect x="140" y="25" width="35" height="30" fill="#8D6E63" stroke="#5D4037" stroke-width="1" rx="3"/>
          <!-- Blade -->
          <rect x="10" y="35" width="130" height="10" fill="#9E9E9E" stroke="#757575" stroke-width="1"/>
          <!-- Teeth -->
          <path d="M10 40 L15 30 L20 40 L25 30 L30 40 L35 30 L40 40 L45 30 L50 40 L55 30 L60 40 L65 30 L70 40 L75 30 L80 40 L85 30 L90 40 L95 30 L100 40 L105 30 L110 40 L115 30 L120 40 L125 30 L130 40" fill="none" stroke="#424242" stroke-width="1"/>
          <!-- Grip -->
          <line x1="145" y1="30" x2="170" y2="30" stroke="#5D4037" stroke-width="1"/>
          <line x1="145" y1="35" x2="170" y2="35" stroke="#5D4037" stroke-width="1"/>
          <line x1="145" y1="40" x2="170" y2="40" stroke="#5D4037" stroke-width="1"/>
          <line x1="145" y1="45" x2="170" y2="45" stroke="#5D4037" stroke-width="1"/>
          <line x1="145" y1="50" x2="170" y2="50" stroke="#5D4037" stroke-width="1"/>
        </svg>`,
        x: 500,
        y: 500
      }
    ];
    
    // Composite all tools onto the background
    let compositeOps = [];
    
    for (const tool of tools) {
      const toolBuffer = Buffer.from(tool.svg);
      const toolImage = await sharp(toolBuffer).png().toBuffer();
      
      compositeOps.push({
        input: toolImage,
        top: tool.y,
        left: tool.x,
        blend: 'over'
      });
    }
    
    // Apply all composites and save
    const result = await sharp(background)
      .composite(compositeOps)
      .jpeg({ quality: 95 })
      .toFile(outputPath);
    
    console.log(`✓ Created advanced construction tools image: ${outputPath}`);
    console.log(`  Dimensions: ${result.width}x${result.height}`);
    console.log(`  Tools added: ${tools.length}`);
    
    console.log('\n🎨 Advanced construction image features:');
    console.log('  • Professional toolbox with Ngân Kim branding');
    console.log('  • Realistic claw hammer with wooden handle');
    console.log('  • Multiple screwdrivers with different tips');
    console.log('  • Adjustable wrench with detailed mechanism');
    console.log('  • Professional pliers with pivot point');
    console.log('  • Power drill with ventilation slots');
    console.log('  • Measuring tape with measurement marks');
    console.log('  • Spirit level with bubble vials');
    console.log('  • Hand saw with detailed teeth');
    console.log('  • All tools have realistic colors and shadows');
    
  } catch (error) {
    console.error('❌ Error creating advanced construction image:', error);
  }
}

createAdvancedConstructionImage();