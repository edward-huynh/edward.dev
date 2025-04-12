import { AuroraText } from "./magicui/aurora-text";
import { FlickeringGrid } from "./magicui/flickering-grid";
import { TypingAnimation } from "./magicui/typing-animation";

export const Banner = () => {
  return (
    <div className="relative h-[400px] w-full overflow-hidden bg-background ">
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={800}
        width={1920}
      />
      <div className="absolute size-full top-0 left-0 flex justify-center items-center">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl xl:text-8xl">
          <TypingAnimation className="text-7xl bg-clip-text bg-gradient-to-bl from-primary to-primary text-transparent ">
            FRONT END DEVELOPER
          </TypingAnimation>
        </h1>
      </div>
    </div>
  );
};
