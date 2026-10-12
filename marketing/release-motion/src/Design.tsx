import type {CSSProperties, ReactNode} from 'react';
import {AbsoluteFill, CanvasImage, Easing, Interactive, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';

export const ink = '#0f0e0c';
export const cream = '#f2ede3';
export const sage = '#9ccfae';
export const brass = '#c9a45c';
export const ease = Easing.bezier(0.16, 1, 0.3, 1);
const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

export function Reveal({children, delay = 0, style}: {children: ReactNode; delay?: number; style?: CSSProperties}) {
  const frame = useCurrentFrame();
  return <Interactive.Div name="Reveal" style={{...style,
    opacity: interpolate(frame, [delay, delay + 22], [0, 1], clamp),
    translate: `0 ${interpolate(frame, [delay, delay + 32], [28, 0], {...clamp, easing: ease})}px`,
  }}>{children}</Interactive.Div>;
}

export function Brand({large = false, light = false}: {large?: boolean; light?: boolean}) {
  return <div style={{display: 'flex', alignItems: 'center', gap: large ? 24 : 15}}>
    <CanvasImage src={staticFile('dinesense-mark.webp')} style={{width: large ? 78 : 48, height: large ? 78 : 48, borderRadius: large ? 18 : 11}} />
    <span style={{fontFamily: 'Fraunces', fontSize: large ? 65 : 37, fontWeight: 600, color: light ? '#7d5f26' : brass}}>DineSense</span>
  </div>;
}

export function Backdrop({children, light = false}: {children: ReactNode; light?: boolean}) {
  const {width, height} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: light ? '#f4f0e6' : ink, color: light ? '#17140f' : cream, fontFamily: '"Segoe UI", Arial, sans-serif'}}>
    <div style={{position: 'absolute', width: width * 0.86, height: width * 0.86, border: `1px solid ${light ? '#d6cdba' : '#292d25'}`, borderRadius: '50%', left: width * 0.53, top: height * 0.03}} />
    <div style={{position: 'absolute', width: width * 0.67, height: width * 0.67, border: `1px solid ${light ? '#d6cdba' : '#292d25'}`, borderRadius: '50%', left: width * 0.625, top: height * 0.2}} />
    {children}
  </AbsoluteFill>;
}

export function Phone({screen, width, left, top, angle = 0, delay = 0}: {screen: string; width: number; left: number; top: number; angle?: number; delay?: number}) {
  const frame = useCurrentFrame();
  return <Interactive.Div name="App screen" style={{position: 'absolute', left, top, width,
    opacity: interpolate(frame, [delay, delay + 22], [0, 1], clamp),
    translate: `0 ${interpolate(frame, [delay, delay + 42], [62, 0], {...clamp, easing: ease})}px`,
    rotate: `${angle}deg`,
    scale: interpolate(frame, [delay, delay + 46], [0.95, 1], {...clamp, easing: ease}),
    borderRadius: width * 0.118, border: '2px solid #58574e', padding: width * 0.014,
    backgroundColor: '#171815', boxShadow: '0 32px 65px #00000060', overflow: 'hidden',
  }}><CanvasImage src={staticFile(`screens/${screen}`)} style={{width: '100%', display: 'block', borderRadius: width * 0.1}} /></Interactive.Div>;
}

export function HeroCopy({chapter, title, body}: {chapter: string; title: ReactNode; body: ReactNode}) {
  return <div style={{position: 'absolute', left: 92, top: 210, width: 675}}>
    <Reveal><div style={{fontSize: 20, letterSpacing: 3, textTransform: 'uppercase', color: brass, marginBottom: 30}}>{chapter}</div></Reveal>
    <Reveal delay={5}><h1 style={{fontFamily: 'Fraunces', fontSize: 110, fontWeight: 400, letterSpacing: -4, lineHeight: 1.02, margin: 0}}>{title}</h1></Reveal>
    <Reveal delay={12}><p style={{fontSize: 29, lineHeight: 1.5, maxWidth: 540, marginTop: 28, color: '#b3ada1'}}>{body}</p></Reveal>
  </div>;
}

export function HeroFurniture({chapter}: {chapter: number}) {
  const frame = useCurrentFrame();
  return <>
    <div style={{position: 'absolute', top: 58, left: 92}}><Brand /></div>
    <div style={{position: 'absolute', left: 92, right: 92, bottom: 46, display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 18, color: '#b3ada1'}}>
      <span>Actual app screens · demo data</span>
      <div style={{display: 'flex', gap: 10}}>{[0, 1, 2, 3, 4].map(i => <div key={i} style={{width: 42, height: 2, backgroundColor: i === chapter ? sage : '#39372f', opacity: i === chapter ? interpolate(frame, [0, 20], [0.5, 1], clamp) : 1}} />)}</div>
      <span>dinesense.app</span>
    </div>
  </>;
}

export function SocialFurniture({light = false, showBrand = true, disclosure = 'Actual app screens · demo data'}: {light?: boolean; showBrand?: boolean; disclosure?: string}) {
  return <>
    {showBrand && <div style={{position: 'absolute', top: 140, left: 84}}><Brand light={light} /></div>}
    <div style={{position: 'absolute', top: 1536, left: 84, right: 150, fontSize: 24, lineHeight: 1.55, color: light ? '#5e584c' : '#b3ada1'}}>
      <div>{disclosure}</div>
      <div>iPhone · iOS 26+ · Account + Pro required</div>
    </div>
  </>;
}

export function SocialHeading({label, children, light = false}: {label: string; children: ReactNode; light?: boolean}) {
  return <div style={{position: 'absolute', top: 250, left: 84, right: 150}}>
    <Reveal><div style={{fontSize: 24, letterSpacing: 3, textTransform: 'uppercase', color: light ? '#7d5f26' : brass, marginBottom: 20}}>{label}</div></Reveal>
    <Reveal delay={4}><h1 style={{fontFamily: 'Fraunces', fontSize: 94, fontWeight: 400, letterSpacing: -2.5, lineHeight: 1.04, margin: 0}}>{children}</h1></Reveal>
  </div>;
}
