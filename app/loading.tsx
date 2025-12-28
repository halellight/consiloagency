export default function Loading() {
    return (
        <div className="loading-container" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#0a0a0a',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000
        }}>
            <div className="logo" style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '20px' }}>
                <span style={{ color: 'white' }}>consilo</span><span style={{ color: '#fff507' }}>.</span>
            </div>
            <div className="loader-bar" style={{
                width: '200px',
                height: '2px',
                background: 'rgba(255,255,255,0.1)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="loader-progress" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '50%',
                    background: '#fff507',
                    animation: 'loadAnim 1.5s infinite ease-in-out'
                }}></div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes loadAnim {
          0% { left: -100%; width: 100%; }
          100% { left: 100%; width: 100%; }
        }
      `}} />
        </div>
    );
}
