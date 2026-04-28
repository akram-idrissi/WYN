// Returns the current waitlist count.
// Set the WAITLIST_COUNT env var in Vercel to update it manually
// until a real database is connected.
export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", process.env.ALLOWED_ORIGIN || "https://wyn.africa");
  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");

  const count = parseInt(process.env.WAITLIST_COUNT || "0", 10);
  return res.status(200).json({ count });
}
