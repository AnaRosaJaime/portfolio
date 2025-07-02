export const ToggleMatrixRain = ({
  rainOn,
  setRainOn,
}: {
  rainOn: boolean;
  setRainOn: (value: boolean) => void;
}) => {
  return (
    <div
      onClick={() => setRainOn(!rainOn)}
      style={{
        width: '60px',
        height: '30px',
        borderRadius: '15px',
        backgroundColor: '#111',
        border: '2px solid #0f0',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 6px',
        userSelect: 'none',
        boxShadow: '0 0 6px rgba(0, 255, 0, 0.5)',
        transition: 'background-color 0.3s',
      }}
      title={rainOn ? 'Disable Matrix Rain' : 'Enable Matrix Rain'}
    >
      <span
        style={{
          fontSize: '16px',
          opacity: rainOn ? 0.2 : 1,
          transition: 'opacity 0.3s',
        }}
      >
        🔴
      </span>
      <span
        style={{
          fontSize: '16px',
          opacity: rainOn ? 1 : 0.2,
          transition: 'opacity 0.3s',
        }}
      >
        🔵
      </span>
    </div>
  );
};
