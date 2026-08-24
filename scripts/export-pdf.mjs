import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT = path.resolve(__dirname, "../이재복_이력서.pdf");
const URL = "http://localhost:5173";

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

await page.goto(URL, { waitUntil: "networkidle0" });

// PDF는 항상 라이트 테마로, 탭 콘텐츠는 전부 펼쳐서 출력
await page.evaluate(() => {
  document.documentElement.classList.remove("dark");
});

await page.emulateMediaType("print");

await page.pdf({
  path: OUTPUT,
  format: "A4",
  printBackground: true,
  margin: { top: "12mm", bottom: "12mm", left: "12mm", right: "12mm" },
});

await browser.close();
console.log(`PDF 저장 완료: ${OUTPUT}`);
