import React from 'react';

const Impressum: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
        <h1>Impressum</h1>
        <p>Angaben gemäß § 5 TMG</p>

        <h3>Betreiber der Website</h3>
        <p>
          <strong>handwerk-stellen.de GmbH</strong><br />
          Handwerkerstraße 1<br />
          10115 Berlin<br />
          Deutschland
        </p>

        <h3>Kontakt</h3>
        <p>
          Telefon: +49 (0) 30 12345678<br />
          E-Mail: kontakt@handwerk-stellen.de<br />
          Website: www.handwerk-stellen.de
        </p>

        <h3>Registereintrag</h3>
        <p>
          Eintragung im Handelsregister.<br />
          Registergericht: Amtsgericht Berlin-Charlottenburg<br />
          Registernummer: HRB 123456
        </p>

        <h3>Umsatzsteuer</h3>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
          DE 123456789
        </p>

        <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
        <p>
          Max Mustermann<br />
          Handwerkerstraße 1<br />
          10115 Berlin
        </p>

        <h3>Streitschlichtung</h3>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.<br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <h3>Haftung für Inhalte</h3>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
          Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
        </p>
      </div>
    </div>
  );
};

export default Impressum;