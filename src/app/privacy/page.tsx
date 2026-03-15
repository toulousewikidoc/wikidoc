import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-headline font-bold text-primary mb-8 text-center">Politique de Confidentialité</h1>
      
      <Card className="shadow-md border-primary/10">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">Informations sur la collecte et l'utilisation de vos données</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-slate max-w-none dark:prose-invert space-y-8 pt-6">
          
          <section>
            <h2 className="text-xl font-bold text-primary mb-3 border-b pb-2">1. Introduction</h2>
            <p className="leading-relaxed">
              Fais ta sortie à Toulouse (ci-après « l'Application » ou « Nous »), éditée par l'association Happy People 31, basée au 26, avenue de la Colonne à Toulouse, s'engage à protéger la confidentialité des utilisateurs. Cette politique de confidentialité détaille les types d'informations que nous collectons via l'Application, la manière dont nous les utilisons et les droits des utilisateurs concernant ces informations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3 border-b pb-2">2. Données Collectées</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2">2.1. Informations Fournies par l'Utilisateur</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Données d'identité et de contact :</strong> Nom d'utilisateur, adresse e-mail, mot de passe chiffré (lors de la création d'un compte).</li>
                  <li><strong>Contenu Utilisateur :</strong> Messages dans les discussions, commentaires sur les sorties, descriptions de profils, textes, photos, ou autres contenus que vous téléchargez ou créez dans l'Application.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">2.2. Informations Collectées Automatiquement</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Données d'utilisation :</strong> Informations sur la manière dont vous interagissez avec l'Application (pages vues, fonctionnalités utilisées, fréquence d'accès, etc.).</li>
                  <li><strong>Données techniques :</strong> Adresse IP, type d'appareil mobile, système d'exploitation, identifiants uniques de l'appareil (IDFA pour iOS, Android ID pour Android).</li>
                  <li><strong>Données de localisation :</strong> Avec votre consentement explicite (GPS), ou moins précise via l'adresse IP.</li>
                  <li><strong>Cookies :</strong> Utilisés pour améliorer l'expérience utilisateur et analyser l'utilisation de l'Application.</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-bold text-primary mb-3 border-b pb-2">3. Utilisation des Données</h2>
            <p className="mb-3">Nous utilisons les données collectées pour les finalités suivantes :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Fourniture de Services :</strong> Exploiter, maintenir et améliorer les fonctionnalités de l'Application.</li>
              <li><strong>Communication :</strong> Répondre au support, envoyer des notifications de service ou marketing (avec consentement).</li>
              <li><strong>Analyse et Amélioration :</strong> Surveiller l'utilisation et diagnostiquer les problèmes techniques.</li>
              <li><strong>Sécurité :</strong> Prévenir la fraude et se conformer aux obligations légales.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3 border-b pb-2">4. Partage des Données</h2>
            <p className="mb-3">Nous ne vendons ni ne louons vos données personnelles. Nous pouvons les partager avec :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Prestataires Tiers :</strong> Entreprises externes (hébergement, analyse) contractuellement obligées de protéger vos données.</li>
              <li><strong>Obligations Légales :</strong> En cas de procédure judiciaire valide ou contrainte par la loi.</li>
              <li><strong>Transferts d'Entreprise :</strong> En cas de fusion, acquisition ou vente d'actifs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3 border-b pb-2">5. Durée de Conservation des Données</h2>
            <p className="leading-relaxed">
              Nous conservons vos informations personnelles aussi longtemps que nécessaire pour vous fournir le service, résoudre les litiges et nous conformer à nos obligations légales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3 border-b pb-2">6. Vos Droits d'Utilisateur</h2>
            <p className="mb-3">Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Droit d'accès :</strong> Obtenir confirmation et accès à vos données.</li>
              <li><strong>Droit de rectification :</strong> Corriger des données inexactes.</li>
              <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données.</li>
              <li><strong>Droit d'opposition :</strong> Vous opposer à certains traitements (marketing).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3 border-b pb-2">7. Nous Contacter</h2>
            <p className="leading-relaxed">
              Pour toute question, contactez-nous à : <a href="mailto:tolosa31@free.fr" className="text-accent hover:underline font-semibold">tolosa31@free.fr</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-3 border-b pb-2">8. Modifications</h2>
            <p className="leading-relaxed">
              Nous mettons à jour cette politique périodiquement. Toute modification sera publiée sur cette page avec une nouvelle date d'entrée en vigueur.
            </p>
          </section>

          <div className="mt-12 pt-6 border-t text-sm text-muted-foreground italic text-center">
            Date d'entrée en vigueur : 12 novembre 2025
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
