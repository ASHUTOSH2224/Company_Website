import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateFavicon() {
  try {
    console.log('🎨 Generating U-shaped favicon.ico from SVG...');
    
    // Read the SVG file
    const svgPath = path.join(__dirname, '../public/favicon.svg');
    const svgBuffer = fs.readFileSync(svgPath);
    
    // Generate multiple sizes for ICO (16x16, 32x32, 48x48)
    const sizes = [16, 32, 48];
    const pngBuffers = [];
    
    for (const size of sizes) {
      const pngBuffer = await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toBuffer();
      pngBuffers.push(pngBuffer);
      console.log(`✅ Generated ${size}x${size} PNG for ICO`);
    }
    
    // For simplicity, use the 32x32 PNG as favicon.ico
    // (Modern browsers accept PNG format for ICO)
    const favicon32 = await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toBuffer();
    
    const icoPath = path.join(__dirname, '../public/favicon.ico');
    fs.writeFileSync(icoPath, favicon32);
    
    console.log('✅ Generated favicon.ico successfully!');
    console.log('📍 Location: /public/favicon.ico');
    console.log('🔤 Contains: Bold "U" shape with UPSTRAIQ gradient');
    
    // Also generate individual PNG files for different uses
    const additionalSizes = [16, 24, 32, 48, 64, 128, 256];
    for (const size of additionalSizes) {
      const pngBuffer = await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toBuffer();
      
      const outputPath = path.join(__dirname, `../public/favicon-${size}x${size}.png`);
      fs.writeFileSync(outputPath, pngBuffer);
      console.log(`✅ Generated favicon-${size}x${size}.png`);
    }
    
  } catch (error) {
    console.error('❌ Error generating favicon:', error.message);
    process.exit(1);
  }
}

generateFavicon(); 