function write_log(content) {
  // write to file
  const fs = require("fs");
  const d = new Date();

  if (typeof content === "object") {
    content = JSON.stringify(content, null, 2);
  }

  //   fs.writeFileSync(`output_${d.getTime()}.txt`, content);
  fs.writeFileSync(`output.txt`, content);
}

module.exports = {
  write_log,
};

// (kind, scope);
