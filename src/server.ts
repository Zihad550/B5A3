import { Server } from "http";
import app from "./app";
import config from "./app/config";
import mongoose from "mongoose";

let server: Server;
async function main() {
  try {
    await mongoose.connect(config.URI);
    server = app.listen(config.PORT, () => {
      console.log(`App listening on port ${config.PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}
main();

process.on("unhandledRejection", () => {
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit();
});

process.on("uncaughtException", () => {
  process.exit(1);
});
