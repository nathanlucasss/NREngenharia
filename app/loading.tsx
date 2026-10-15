export default function Loading() {
  return (
    <div className="page-loader" aria-live="polite" aria-busy="true">
      <div className="loader-mark" aria-hidden>
        LP
      </div>
      <p className="loader-label">Lorem Prime</p>
      <div className="loader-line" />
    </div>
  );
}
