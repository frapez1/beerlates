export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/qr") {
      const current = parseInt((await env.QR_COUNTER.get("scans")) || "0");
      await env.QR_COUNTER.put("scans", String(current + 1));
      return Response.redirect("https://www.beerlates.com", 302);
    }

    return env.ASSETS.fetch(request);
  },
};
