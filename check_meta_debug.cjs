const fs = require("fs");
const path = require("path");

function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (filePath.endsWith(".html")) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const htmlFiles = findHtmlFiles("dist");

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, "utf8");
  const titleMatch = content.match(/<title>([^<]+)<\/title>/);
  const title = titleMatch ? titleMatch[1] : "";
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  let desc = descMatch ? descMatch[1] : "";
  
  if (!desc) {
    const descMatch2 = content.match(/<meta\s+content=["']([^"']+)["']\s+name=["']description["']/i);
    desc = descMatch2 ? descMatch2[1] : "";
  }

  // Basic decode
  const decodedTitle = title.replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&quot;/g, "\"");
  const decodedDesc = desc.replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&quot;/g, "\"");

  if (decodedTitle.length > 60) {
    console.log("Title > 60: (" + decodedTitle.length + ") " + decodedTitle + " in " + file);
  }
  if (decodedDesc.length > 160) {
    console.log("Desc > 160: (" + decodedDesc.length + ") " + decodedDesc + " in " + file);
  }
}
