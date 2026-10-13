import {Composition, staticFile} from 'remotion';
import {loadFont} from '@remotion/fonts';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {Meal, Find} from './scenes/Meal';
import {Order} from './scenes/Order';
import {Ready} from './scenes/Ready';
import {Close} from './scenes/Close';
import {SocialNumbers, SocialMealStyles} from './Social';
import {HeroLoop} from './HeroLoop';
void loadFont({family: 'Fraunces', url: staticFile('fonts/fraunces-regular.ttf'), weight: '400'});
void loadFont({family: 'Fraunces', url: staticFile('fonts/fraunces-semibold.ttf'), weight: '600'});

const WebsiteHero: React.FC = () => <TransitionSeries>
  <TransitionSeries.Sequence durationInFrames={135} name="Your meal"><Meal /></TransitionSeries.Sequence>
  <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames: 12})} />
  <TransitionSeries.Sequence durationInFrames={132} name="What fits"><Find /></TransitionSeries.Sequence>
  <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames: 12})} />
  <TransitionSeries.Sequence durationInFrames={162} name="Make it yours"><Order /></TransitionSeries.Sequence>
  <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames: 12})} />
  <TransitionSeries.Sequence durationInFrames={147} name="Ready to go"><Ready /></TransitionSeries.Sequence>
  <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames: 12})} />
  <TransitionSeries.Sequence durationInFrames={132} name="DineSense"><Close /></TransitionSeries.Sequence>
</TransitionSeries>;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition id="HeroLoop" component={HeroLoop} durationInFrames={240} fps={30} width={1000} height={1120} />
      <Composition id="WebsiteHero" component={WebsiteHero} durationInFrames={660} fps={30} width={1600} height={900} />
      <Composition id="SocialNumbers" component={SocialNumbers} durationInFrames={360} fps={30} width={1080} height={1920} />
      <Composition id="SocialMealStyles" component={SocialMealStyles} durationInFrames={300} fps={30} width={1080} height={1920} />
    </>
  );
};
