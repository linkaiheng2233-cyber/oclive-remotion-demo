import React, {useMemo} from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

const bg = {
  a: '#0b0f1a',
  b: '#0a1a2b',
  c: '#061221',
};

export const OcliveDemo: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps, width, height} = useVideoConfig();

  const tIn = spring({frame, fps, config: {damping: 14, mass: 0.8}});
  const tOut = spring({frame: frame - 150, fps, config: {damping: 18, mass: 0.9}});

  const titleY = interpolate(tIn, [0, 1], [40, 0]);
  const titleOpacity = interpolate(frame, [0, 18], [0, 1], {extrapolateRight: 'clamp'});
  const subtitleOpacity = interpolate(frame, [12, 28], [0, 1], {extrapolateRight: 'clamp'});

  const exit = interpolate(tOut, [0, 1], [0, 1], {extrapolateRight: 'clamp'});
  const exitOpacity = 1 - exit;
  const exitScale = 1 - exit * 0.04;

  const orbit = (frame / fps) * 0.9;
  const blobs = useMemo(() => {
    const r = Math.min(width, height) * 0.42;
    return [
      {x: width * 0.5 + Math.cos(orbit) * r, y: height * 0.5 + Math.sin(orbit) * r},
      {x: width * 0.5 + Math.cos(orbit + 2.1) * r, y: height * 0.5 + Math.sin(orbit + 2.1) * r},
      {x: width * 0.5 + Math.cos(orbit + 4.2) * r, y: height * 0.5 + Math.sin(orbit + 4.2) * r},
    ];
  }, [height, orbit, width]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: `radial-gradient(1200px 700px at 30% 20%, ${bg.b}, ${bg.a})`,
        overflow: 'hidden',
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(900px 600px at 70% 80%, ${bg.c}, transparent)`,
          opacity: 0.9,
        }}
      />

      {blobs.map((p, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: p.x - 260,
            top: p.y - 260,
            width: 520,
            height: 520,
            borderRadius: 520,
            background:
              i === 0
                ? 'rgba(120, 170, 255, 0.22)'
                : i === 1
                  ? 'rgba(128, 255, 221, 0.16)'
                  : 'rgba(255, 160, 220, 0.14)',
            filter: 'blur(22px)',
            transform: `scale(${1 + Math.sin(orbit + i) * 0.03})`,
          }}
        />
      ))}

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: `scale(${exitScale})`,
          opacity: exitOpacity,
        }}
      >
        <div
          style={{
            width: 1280,
            padding: 64,
            borderRadius: 28,
            background: 'rgba(10, 18, 36, 0.62)',
            border: '1px solid rgba(160, 190, 255, 0.18)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.45)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              marginBottom: 18,
              opacity: interpolate(frame, [0, 22], [0, 1], {extrapolateRight: 'clamp'}),
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 12,
                background: 'rgba(140, 190, 255, 0.9)',
                boxShadow: '0 0 18px rgba(140, 190, 255, 0.55)',
              }}
            />
            <div style={{color: 'rgba(210, 230, 255, 0.8)', fontSize: 18, letterSpacing: 0.4}}>
              oclive / Remotion demo
            </div>
          </div>

          <div
            style={{
              color: 'white',
              fontSize: 74,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -0.8,
              transform: `translateY(${titleY}px)`,
              opacity: titleOpacity,
            }}
          >
            本地优先的角色对话
          </div>

          <div
            style={{
              marginTop: 18,
              color: 'rgba(210, 230, 255, 0.85)',
              fontSize: 30,
              lineHeight: 1.35,
              opacity: subtitleOpacity,
              maxWidth: 980,
            }}
          >
            Tauri + Vue 3 + Rust · 可替换子系统 · 角色包为唯一对接面
          </div>

          <div
            style={{
              marginTop: 44,
              display: 'flex',
              gap: 14,
              flexWrap: 'wrap',
              opacity: interpolate(frame, [22, 46], [0, 1], {extrapolateRight: 'clamp'}),
            }}
          >
            {['Scenes', 'Virtual time', 'Memory', 'Emotion', 'Prompt builder'].map((t, idx) => {
              const w = spring({frame: frame - (26 + idx * 3), fps, config: {damping: 18, mass: 0.7}});
              return (
                <div
                  key={t}
                  style={{
                    padding: '10px 14px',
                    borderRadius: 999,
                    color: 'rgba(230, 245, 255, 0.9)',
                    fontSize: 18,
                    border: '1px solid rgba(170, 210, 255, 0.18)',
                    background: 'rgba(255,255,255,0.06)',
                    transform: `translateY(${interpolate(w, [0, 1], [10, 0])}px)`,
                  }}
                >
                  {t}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

