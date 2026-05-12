export default function Loading() {
  return (
    <div className="page-loader" aria-live="polite" aria-busy="true">
      <div className="loader-frame">
        <div className="loader-line" />
        <div className="loader-line" />
        <div className="loader-line" />
      </div>
    </div>
  );
}
