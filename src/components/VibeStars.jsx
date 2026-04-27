export function VibeStars({ score, dark }) {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24"
          fill={i <= Math.round(score) ? "#F59E0B" : "none"}
          stroke={i <= Math.round(score) ? "#F59E0B" : dark ? "rgba(255,255,255,0.25)" : "#D1D5DB"}
          strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
      <span style={{ marginLeft: 4, fontSize: 12, color: dark ? "rgba(255,255,255,0.45)" : "#9CA3AF" }}>{score}</span>
    </span>
  );
}
