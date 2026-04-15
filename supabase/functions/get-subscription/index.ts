import "@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, x-client-info, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: corsHeaders,
    });
  }

  try {
    const { userId } = await req.json();

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
      {
        global: {
          headers: {
            Authorization: req.headers.get("Authorization")!,
          }
        }
      }
    );
    console.log(req.headers.get("Authorization"));

    const { error } = await supabase
      .from("subscriptions")
      .update({ plan: "premium" })
      .eq("user_id", userId);
    
    const { data } = await supabase
      .from("subscriptions")
      .select("plan")
      .eq("user_id", userId)
      .single()

    return new Response(JSON.stringify({ hasAccess: (data?.plan || "free") === "premium" }), {
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "server error" }), {
      status: 500,
      headers: corsHeaders,
    });
  }
});
