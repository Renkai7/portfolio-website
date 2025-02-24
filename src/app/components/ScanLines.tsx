export default function ScanLines() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 h-screen">
      <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_0%,rgba(142,68,173,0.02)_50%,transparent_100%)] bg-[length:100%_4px]" />
      <div className="absolute inset-0 animate-scan-lines opacity-50" />
    </div>
  );
}
