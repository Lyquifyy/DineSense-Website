import {AbsoluteFill, CanvasImage, Interactive, interpolate, staticFile, useCurrentFrame} from 'remotion';

// A seamless, screen-only companion to the full film. The screenshots stay
// unchanged; crossfades show a meal moving from a starting point to a pick.
export const HeroLoop: React.FC = () => {
  const frame = useCurrentFrame();
  return <AbsoluteFill style={{backgroundColor: '#0f0e0c'}}>
    <Interactive.Div name="Meal target" style={{position: 'absolute', left: 85, top: 95, width: 410,
      rotate: '-7deg', opacity: 0.8, padding: 6, borderRadius: 49, border: '2px solid #54564d',
      backgroundColor: '#151714', boxShadow: '0 30px 60px #00000060', overflow: 'hidden'}}>
      <CanvasImage src={staticFile('screens/target-880.webp')} style={{width: '100%', display: 'block', borderRadius: 41}} />
    </Interactive.Div>
    <Interactive.Div name="Meal to order" style={{position: 'absolute', left: 445, top: 70, width: 445,
      rotate: '4deg', padding: 6, borderRadius: 53, border: '2px solid #54564d',
      backgroundColor: '#151714', boxShadow: '0 30px 60px #00000060', overflow: 'hidden'}}>
      <CanvasImage src={staticFile('screens/simple-880.webp')} style={{width: '100%', display: 'block', borderRadius: 45}} />
      <CanvasImage src={staticFile('screens/results-880.webp')} style={{position: 'absolute', inset: 6, width: 'calc(100% - 12px)', borderRadius: 45,
        opacity: interpolate(frame, [55, 65, 125, 126], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}} />
      <CanvasImage src={staticFile('screens/edited-order-880.webp')} style={{position: 'absolute', inset: 6, width: 'calc(100% - 12px)', borderRadius: 45,
        opacity: interpolate(frame, [115, 125, 185, 186], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}} />
      <CanvasImage src={staticFile('screens/picked-880.webp')} style={{position: 'absolute', inset: 6, width: 'calc(100% - 12px)', borderRadius: 45,
        opacity: interpolate(frame, [175, 185, 225, 239], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}} />
    </Interactive.Div>
  </AbsoluteFill>;
};
