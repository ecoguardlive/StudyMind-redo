// PDF PROCESSING
// ═══════════════════════════════════════════════════════
async function processPDF(file){
  const arrayBuffer=await file.arrayBuffer();
  const pdf=await pdfjsLib.getDocument({data:arrayBuffer}).promise;
  const totalPages=pdf.numPages;
  const maxPages=Math.min(totalPages,50);
  let extractedText='';
  for(let i=1;i<=maxPages;i++){
    updateOverlay(`Extracting page ${i} of ${maxPages}…`,Math.round((i/maxPages)*80));
    const page=await pdf.getPage(i);
    try{
      const tc=await page.getTextContent();
      const pageText=tc.items.map(it=>it.str).join(' ').trim();
      if(pageText.length>20) extractedText+=`=== PAGE ${i} ===\n${pageText}\n\n`;
    }catch(e){/* skip */}
  }
  return {text:extractedText.trim(),totalPages};
}

// ═══════════════════════════════════════════════════════


// Fallback when PDF has little/no text
async function validateExtractedText(text){
  if(!text || text.trim().length < 50){
    console.warn('PDF appears scanned/image-based; OCR needed.');
  }
  return text;
}
