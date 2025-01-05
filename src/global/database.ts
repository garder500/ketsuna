import {createClient} from "@supabase/supabase-js";
import { Database } from "./supabase";

const supabaseUrl = "https://app.ketsuna.com";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaXNzIjoic3VwYWJhc2UtZGVtbyIsImlhdCI6MTY0MTc2OTIwMCwiZXhwIjoxNzk5NTM1NjAwfQ.PKXAUUJJ0Al7gNB98-TlxV1TxvkTA5zCbolGzmYxM8w";
export default createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
        storageKey:"auth"
    },
    db:{
        schema: "public"
    }
});

