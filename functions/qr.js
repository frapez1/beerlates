export async function onRequest(context) {
  const { env } = context;

  const current = parseInt((await env.QR_COUNTER.get("scans")) || "0");
  await env.QR_COUNTER.put("scans", String(current + 1));

  return Response.redirect("https://www.beerlates.com", 302);
}
