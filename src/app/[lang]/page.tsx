import LandingPage from "@/components/shared/HomePage/LandingPage/LandingPage";
import OurAchievments from "@/components/shared/HomePage/OurAchievments/OurAchievments";
import OurCoreServices from "@/components/shared/HomePage/OurCoreServices/OurCoreServices";
import OurWork from "@/components/shared/HomePage/OurWork/OurWork";
import ShelfSolutions from "@/components/shared/HomePage/ShelfSolutions/ShelfSolutions";
import SoftwareDevelopmentProcess from "@/components/shared/HomePage/SoftwareDevelopmentProcess/SoftwareDevelopmentProcess";
import Technologies from "@/components/shared/HomePage/Technologies/Technologies";
import LetDiscussYourProject from "@/components/shared/LetDiscussYourProject/LetDiscussYourProject";

export default function Home({ params }: any) {
  return (
    <main className=" py-8 max-sm:pt-3 flex flex-col gap-[70px] bg-primary w-full pb-16">
      <LandingPage params={params} />
      <OurAchievments params={params} />
      <OurCoreServices params={params} />
      <SoftwareDevelopmentProcess params={params} />
      <ShelfSolutions params={params} />
      <Technologies params={params} />
      {/* <OurWork params={params} /> */}
      <LetDiscussYourProject params={params} />
    </main>
  );
}
