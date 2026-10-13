import {Backdrop, HeroCopy, HeroFurniture, Phone} from '../Design';

export const Ready: React.FC = () => <Backdrop>
  <HeroFurniture chapter={3} />
  <HeroCopy chapter="Ready to go" title={<>Your order.<br />On hand.</>} body={<>Keep the words on your Lock Screen.<br />Copy the numbers for your tracker.</>} />
  <Phone screen="picked-880.webp" width={285} left={1200} top={153} angle={7} />
  <Phone screen="lock-screen-880.webp" width={350} left={890} top={50} angle={-4} delay={8} />
</Backdrop>;
