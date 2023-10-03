import { app } from "app";
let port = process.env.PORT || 5123;

import "@routes/test";

app.listen(port, () => {
    console.log(`Listening on port localhost:${port}`);
})