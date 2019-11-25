import * as core from "@actions/core";
import * as fs from "fs";

async function run() {
  try {
    const neptun = getNeptunCode();
    core.info("Neptun=" + neptun);
  } catch (error) {
    core.setFailed(error.message);
  }

  function getNeptunCode(): string {
    if (!fs.existsSync("neptun.txt")) {
      throw new Error(
        "Hiba: neptun.txt nem talalhato. Error: neptun.txt does not exist"
      );
    }

    const neptunLines = fs
      .readFileSync("neptun.txt", "utf-8")
      .split("\n")
      .filter(Boolean);

    if (neptunLines.length == 0) {
      throw new Error("Hiba: neptun.txt ures. Error: neptun.txt is empty");
    }

    const neptun = neptunLines[0].trim();
    if (neptun.length == 0) {
      throw new Error("Hiba: neptun.txt ures. Error: neptun.txt is empty");
    }

    const regex = /^[a-zA-Z0-9]{6}$/g;
    if (!regex.test(neptun)) {
      throw new Error(
        "Hiba: neptun.txt ervenytelen neptun kodot tartalmaz. Error: neptun.txt contains an invalid neptun code"
      );
    }

    return neptun.toUpperCase();
  }
}

run();
