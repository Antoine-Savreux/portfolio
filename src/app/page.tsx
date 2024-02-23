import ButtonWithLink from "@/components/ButtonWithLink";
import ImportantText from "@/components/ImportantText";
import TitleTextSection from "@/components/TitleTextSection";
import Title from "@/components/Title";
import About from "@/components/About";
import IntroTextButton from "@/components/IntroTextButton";
import Carousel from "@/components/Carousel";
import DownloadButton from "@/components/DownloadButton";

export default function HomePage() {
  return (
    <main className="min-h-full flex flex-col items-center p-4 md:p-10 space-y-8 lg:space-y-16 2xl:space-y-24 2xl:py-16 xl:mx-40 2xl:mx-96">
      {/* Important */}
      <ImportantText text="Développeur web" />
      {/* Titre */}
      {/* Contenu */}
      <TitleTextSection
        title="Hello, moi c'est Antoine"
        text="C'est avec enthousiasme que je me suis lancé dans le domaine du développement web depuis le début de l'année 2023. Après avoir commencé en autodidacte, j'ai enrichi mes connaissances en suivant une formation professionnalisante à l'école O'Clock. Ma soif d'apprentissage persiste, et je poursuis mon apprentissage grâce à des cours sur la plateforme Udemy. À la recherche d'une opportunité enrichissante pour l'année 2024, je me prépare à relever de nouveaux défis passionnants. À bientôt pour peut-être envisager une future collaboration !"
      />
      <div className="flex flex-col items-center justify-center space-y-6 lg:flex-row lg:space-y-0 lg:space-x-10">
        {/* Bouton */}
        <ButtonWithLink title="Contact" href="/contact" type="contact" />
        {/* Bouton */}
        <DownloadButton
          text="Télécharger mon CV"
          type="download"
          filePath="/images/forum.jpg"
          fileName="forum.jpg"
        />
      </div>
      {/* Section a propos */}
      <section className="flex flex-col gap-8 items-center lg:gap-8">
        <Title title="A propos" />
        <About />
      </section>
      <section className="flex flex-col gap-8 items-center lg:flex-row lg:space-x-10 2xl:space-x-20">
        <div className="flex flex-col items-center gap-8">
          {/* Titre */}
          <Title title="Mes projets" />
          {/* Texte intro + bouton */}
          <IntroTextButton text="Les projets sur lesquels j'ai pu travailler :" />
        </div>
        {/* Caroussel de cards projets */}
        <Carousel />
      </section>
    </main>
  );
}
