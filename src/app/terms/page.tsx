import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-headline font-bold text-primary mb-8 text-center">Conditions d'utilisation</h1>
      
      <Card className="shadow-md border-primary/10">
        <CardHeader>
          <CardTitle className="text-2xl font-headline text-center">Règles de bonne conduite et conditions d'utilisation de notre service</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-slate max-w-none dark:prose-invert space-y-8 pt-6">
          
          <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-accent italic">
            Bienvenue sur Fais ta sortie à Toulouse ! Pour que notre communauté reste un espace convivial, sûr et respectueux, nous vous demandons de lire et d'accepter les règles suivantes.
          </div>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm">1</span>
              Respect et bienveillance
            </h2>
            <p className="leading-relaxed pl-10">
              Chaque membre s'engage à faire preuve de courtoisie, de respect et de tolérance envers les autres utilisateurs. Les propos haineux, discriminatoires, injurieux, ou toute forme de harcèlement sont strictement interdits et entraîneront une suspension immédiate du compte.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm">2</span>
              Sécurité et données personnelles
            </h2>
            <p className="leading-relaxed pl-10">
              Ne sharez jamais d'informations personnelles sensibles (numéro de téléphone, adresse exacte, informations bancaires) dans les espaces publics de l'application. Utilisez la messagerie privée pour des échanges plus personnels, mais restez vigilant.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm">3</span>
              Contenu des publications
            </h2>
            <p className="leading-relaxed pl-10">
              Toute publication (annonces, discussions, événements) doit être légale et conforme aux bonnes mœurs. Les contenus à caractère pornographique, violent, illégal ou faisant l'apologie d'activités illicites sont proscrits.
            </p>
          </section>

          <Separator />

          <section className="bg-destructive/5 p-4 rounded-md border border-destructive/20">
            <h2 className="text-xl font-bold text-destructive mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-destructive text-white text-sm">4</span>
              Interdiction des sorties de rencontre amoureuse
            </h2>
            <p className="leading-relaxed pl-10">
              Etant donné les problèmes provoqués par les évènements de rencontre, les sorties de rencontre sont prohibées sur notre application. <strong>Fais ta sortie à Toulouse</strong> est une plateforme dédiée aux sorties amicales et à l'entraide. Les événements organisés dans le but explicite de faire des rencontres amoureuses ou "dating" ne sont pas autorisés. Toute publication de ce type sera supprimée. Tout contrevenant pourra faire l'objet d'une suspension de son compte.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm">5</span>
              Signalements
            </h2>
            <p className="leading-relaxed pl-10">
              Si vous constatez un comportement ou un contenu qui enfreint cette charte, utilisez les outils de signalement mis à votre disposition. Notre équipe de modération examinera chaque signalement avec attention.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm">6</span>
              Responsabilité
            </h2>
            <p className="leading-relaxed pl-10">
              Les organisateurs de sorties sont responsables du bon déroulement de leurs événements. Fais ta sortie à Toulouse agit comme une plateforme de mise en relation et ne peut être tenu responsable des incidents survenant lors des activités organisées par ses membres.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm">7</span>
              Sorties payantes
            </h2>
            <p className="leading-relaxed pl-10">
              En ce qui concerne les sorties payantes ou qui contiennent des activités payantes ou vente de produits à côté, elles doivent être signalées au moins dans la description de la sortie. La transparence est essentielle pour que les membres puissent participer en toute connaissance de cause.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm">8</span>
              Concurrence
            </h2>
            <p className="leading-relaxed pl-10">
              L'utilisation de cette application ne doit pas donner lieu à la promotion d'une autre application de même type que celle-ci.
            </p>
          </section>

          <div className="mt-12 p-6 bg-primary text-primary-foreground rounded-xl text-center shadow-lg">
            <h3 className="text-2xl font-headline font-bold mb-2">Acceptation</h3>
            <p>
              En vous inscrivant, vous confirmez avoir lu et accepté l'ensemble de cette charte. Merci de contribuer à faire de Fais ta sortie à Toulouse un espace positif et accueillant pour tous !
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
