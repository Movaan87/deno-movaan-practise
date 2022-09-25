import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

const handleRequest = (request) => {
  return new Response("This is a practise app with Git commit, version 2.0");
};

let port = 7777;
if (Deno.args.length > 0) {
  const lastArgument = Deno.args[Deno.args.length - 1];
  port = Number(lastArgument);
}

serve(handleRequest, { port: port });
