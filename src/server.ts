import { Server } from "http";
import app from "./app";
import config from "./app/config";

let server: Server;
async function main() {
  try {
    server = app.listen(config.PORT, () => {
      console.log(`App listening on port ${config.PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}
main();
