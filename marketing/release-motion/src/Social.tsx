import {Sequence} from 'remotion';
import {Backdrop, Brand, Phone, Reveal, sage, SocialFurniture, SocialHeading} from './Design';

const Changes: React.FC = () => <Backdrop light>
  <SocialFurniture light disclosure="Actual app screenshots · example order" />
  <SocialHeading light label="Your numbers">Your macros.<br />Your order.</SocialHeading>
  <Phone screen="02-chain-changes.jpg" width={430} left={285} top={540} angle={-3} />
</Backdrop>;

const ExactOrder: React.FC = () => <Backdrop light>
  <SocialFurniture light disclosure="Actual app screenshots · example order" />
  <SocialHeading light label="The words to ask for">Chicken instead<br />of barbacoa.</SocialHeading>
  <Phone screen="01-order-ticket.jpg" width={430} left={285} top={540} angle={2} />
</Backdrop>;

const MealStyle: React.FC = () => <Backdrop>
  <SocialFurniture />
  <SocialHeading label="Your kind of meal">No numbers?<br />Start here.</SocialHeading>
  <Phone screen="simple-880.webp" width={430} left={285} top={540} angle={-3} />
</Backdrop>;

const MealStyleDetails: React.FC = () => <Backdrop>
  <SocialFurniture />
  <SocialHeading label="What sounds good?">Lighter. Regular.<br />More protein.</SocialHeading>
  <Phone screen="simple-880.webp" width={430} left={285} top={540} angle={2} />
</Backdrop>;

const SocialClose: React.FC<{exampleOrder?: boolean}> = ({exampleOrder = false}) => <Backdrop>
  <SocialFurniture showBrand={false} disclosure={exampleOrder ? 'Actual app screenshots · example order' : 'Actual app screens · demo data'} />
  <Reveal style={{position: 'absolute', top: 455, left: 84}}><Brand large /></Reveal>
  <Reveal delay={4} style={{position: 'absolute', top: 625, left: 84, right: 150}}>
    <h1 style={{fontFamily: 'Fraunces', fontSize: 112, lineHeight: 1.05, fontWeight: 400, margin: 0, letterSpacing: -3}}>Know what<br />to order.</h1>
  </Reveal>
  <Reveal delay={10} style={{position: 'absolute', top: 990, left: 84, right: 150}}>
    <div style={{fontSize: 44, color: sage}}>Request pilot access</div>
    <div style={{fontSize: 56, marginTop: 26}}>dinesense.app ↗</div>
    <div style={{fontSize: 30, color: '#b3ada1', marginTop: 36}}>Invite-only iPhone pilot</div>
  </Reveal>
</Backdrop>;

export const SocialNumbers: React.FC = () => <>
  <Sequence durationInFrames={120} name="Compare the suggested changes"><Changes /></Sequence>
  <Sequence from={120} durationInFrames={120} name="See the exact order"><ExactOrder /></Sequence>
  <Sequence from={240} durationInFrames={120} name="Request pilot access"><SocialClose exampleOrder /></Sequence>
</>;

export const SocialMealStyles: React.FC = () => <>
  <Sequence durationInFrames={105} name="Meal styles"><MealStyle /></Sequence>
  <Sequence from={105} durationInFrames={105} name="Choose your kind of meal"><MealStyleDetails /></Sequence>
  <Sequence from={210} durationInFrames={90} name="Request pilot access"><SocialClose /></Sequence>
</>;
