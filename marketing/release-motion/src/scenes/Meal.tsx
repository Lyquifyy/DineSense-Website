import {Backdrop, HeroCopy, HeroFurniture, Phone} from '../Design';

export const Meal: React.FC = () => <Backdrop>
  <HeroFurniture chapter={0} />
  <HeroCopy chapter="Your meal" title={<>Your meal.<br />Your way.</>} body={<>Bring your numbers.<br />Or choose your kind of meal.</>} />
  <Phone screen="target-880.webp" width={300} left={1180} top={150} angle={7} delay={8} />
  <Phone screen="simple-880.webp" width={345} left={882} top={65} angle={-5} />
</Backdrop>;

export const Find: React.FC = () => <Backdrop>
  <HeroFurniture chapter={1} />
  <HeroCopy chapter="What fits" title={<>A target.<br />An actual dish.</>} body={<>Compare nearby dishes.<br />See the changes to ask for.</>} />
  <Phone screen="results-880.webp" width={350} left={1030} top={45} angle={3} />
</Backdrop>;
