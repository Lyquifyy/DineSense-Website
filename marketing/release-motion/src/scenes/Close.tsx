import {Backdrop, HeroCopy, HeroFurniture, Phone, Reveal, sage} from '../Design';

export const Close: React.FC = () => <Backdrop>
  <HeroFurniture chapter={4} />
  <HeroCopy chapter="DineSense for iPhone" title={<>Know what<br />to order.</>} body="Before you get in line." />
  <Reveal delay={10} style={{position: 'absolute', top: 600, left: 92}}>
    <div style={{fontSize: 29, color: sage}}>Explore the pilot at dinesense.app ↗</div>
    <div style={{fontSize: 18, color: '#b3ada1', lineHeight: 1.65, marginTop: 23}}>Invite-only pilot · iPhone with iOS 26+<br />Account and DineSense Pro required</div>
  </Reveal>
  <Phone screen="results-880.webp" width={290} left={1190} top={153} angle={7} />
  <Phone screen="edited-order-880.webp" width={350} left={895} top={50} angle={-4} delay={5} />
</Backdrop>;
