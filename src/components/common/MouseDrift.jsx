export default function MouseDrift({ children, className = "", intensity = 16, style }) {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * intensity;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * intensity;
    // 進入與移動時保留 transform ease，讓漂移感一致
    e.currentTarget.style.transition = "transform 0.3s ease-out, border-radius 0.3s ease";
    e.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
    e.currentTarget.style.zIndex = "1";
  };

  const handleMouseLeave = (e) => {
    // 離開時加上 transform transition，讓圖片平滑歸位
    e.currentTarget.style.transition = "transform 0.3s ease-out, border-radius 0.3s ease";
    e.currentTarget.style.transform = "translate(0, 0)";
    e.currentTarget.style.zIndex = "";
  };

  return (
    <div
      className={className}
      style={{ position: "relative", ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
