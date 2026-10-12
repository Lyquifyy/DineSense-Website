import {Backdrop, HeroCopy, HeroFurniture, Phone} from '../Design';

export const Order: React.FC = () => <Backdrop>
  <HeroFurniture chapter={2} />
  <HeroCopy chapter="Your order" title={<>A little more<br />you.</>} body={<>Extra chicken. No sour cream.<br />See the order and its new totals.</>} />
  <Phone screen="adjust-880.webp" width={285} left={1195} top={155} angle={8} />
  <Phone screen="edited-order-880.webp" width={350} left={900} top={50} angle={-4} delay={9} />
</Backdrop>;
