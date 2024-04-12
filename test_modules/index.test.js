// index.test.js or index.spec.js
const fs = require("fs");
const path = require("path");

describe("index.html", () => {
  it("should exist and contain required elements", () => {
    const indexPath = path.resolve(__dirname, "../index.html");
    const indexHtml = fs.readFileSync(indexPath, "utf8");

    expect(indexHtml).toBeDefined();
    expect(indexHtml).toContain("<title>UMS</title>");
    expect(indexHtml).toContain('<div id="root"></div>');
    expect(indexHtml).toContain(
      '<script type="module" src="/src/main.jsx"></script>'
    );
  });
});
