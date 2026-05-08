export default function Logo({ size = '1.5rem', useImage = true }: { size?: string, useImage?: boolean }) {
  if (useImage) {
    // Falls back to image if the user uploads logo.png to public dir
    return <img src="/logo.png" alt="Matrix Telematics Logo" style={{ height: size, objectFit: 'contain' }} />;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1 }}>
      <div style={{ fontSize: size, fontWeight: 900, letterSpacing: '1px', fontFamily: 'Impact, sans-serif' }}>
        <span style={{ color: 'var(--primary-color)' }}>MATR</span>
        <span style={{ color: 'var(--primary-color)' }}>I</span>
        <span style={{ color: 'var(--secondary-color)' }}>X</span>
      </div>
      <div style={{ fontSize: `calc(${size} * 0.35)`, fontWeight: 600, color: 'var(--secondary-color)', letterSpacing: '2px', display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '2px' }}>
        <span>Telematics</span>
        <span style={{ marginLeft: '10px' }}>Limited</span>
      </div>
    </div>
  );
}
