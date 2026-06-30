import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

export default function Datenschutz() {
  return (
    <div className="bg-background text-foreground min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <SiteNav />

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <div className="text-xs font-black tracking-widest text-muted-foreground mb-4">RECHTLICHES</div>
        <h1
          className="leading-none tracking-tight mb-4"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(3rem, 8vw, 5rem)", fontWeight: 900 }}
        >
          DATENSCHUTZ&shy;ERKLÄRUNG
        </h1>
        <p className="text-muted-foreground text-sm mb-16">Stand: Juni 2026</p>

        <Section title="1. Verantwortlicher">
          <p>
            Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:
          </p>
          <p className="mt-3">
            Josefine Markarian<br />
            Schlieperstr. 33<br />
            13507 Berlin<br />
            Deutschland<br />
            E-Mail: {""}
            <a href="mailto:info@beerlates.com" className="underline hover:text-primary transition-colors">
              info@beerlates.com
            </a>
          </p>
        </Section>

        <Section title="2. Überblick">
          <p>
            Diese Website informiert über unsere Tätigkeiten und bietet Besucherinnen und Besuchern die
            Möglichkeit, uns über ein Online-Kontaktformular zu kontaktieren.
          </p>
          <p className="mt-3">
            Wir verarbeiten personenbezogene Daten nur in dem Umfang, der erforderlich ist, um diese
            Website bereitzustellen, ihre Sicherheit zu gewährleisten, Anfragen zu beantworten und mit
            Interessentinnen, Interessenten oder Kunden zu kommunizieren.
          </p>
        </Section>

        <Section title="3. Aufruf dieser Website">
          <p>
            Wenn Sie diese Website besuchen, können technische Informationen automatisch verarbeitet
            werden, um die Website korrekt anzuzeigen sowie ihre Sicherheit und Stabilität zu
            gewährleisten. Dazu können gehören:
          </p>
          <ul className="mt-3 space-y-1 list-disc list-inside">
            {[
              "IP-Adresse",
              "Datum und Uhrzeit des Zugriffs",
              "Aufgerufene Seiten und Dateien",
              "Browsertyp und -version",
              "Betriebssystem",
              "Referrer-URL",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-3">
            Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes
            Interesse besteht im sicheren, stabilen und zuverlässigen Betrieb dieser Website.
          </p>
        </Section>

        <Section title="4. Hosting und Content-Delivery">
          <p>
            Diese Website wird über <strong>Cloudflare Pages</strong>, einem Dienst der Cloudflare,
            Inc., 101 Townsend St, San Francisco, CA 94107, USA, gehostet.
          </p>
          <p className="mt-3">
            Wir nutzen Cloudflare für das Webhosting, die Sicherheit einschließlich des Schutzes vor
            Missbrauch und Distributed-Denial-of-Service-Angriffen sowie für die Auslieferung der
            Inhalte dieser Website. Cloudflare verarbeitet technische Daten, die erforderlich sind, um
            diese Website auszuliefern, sie vor Missbrauch zu schützen und einen zuverlässigen Zugang
            sicherzustellen. Dazu können die in Abschnitt 3 genannten Daten gehören.
          </p>
          <p className="mt-3">
            Daten können außerhalb des Europäischen Wirtschaftsraums verarbeitet werden. Soweit
            erforderlich, nutzt Cloudflare geeignete Schutzmaßnahmen für internationale
            Datenübermittlungen, einschließlich Standardvertragsklauseln.
          </p>
          <p className="mt-3">
            Weitere Informationen finden Sie in den{" "}
            <a href="https://www.cloudflare.com/trust-hub/gdpr/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">
              DSGVO-Informationen von Cloudflare
            </a>{" "}
            und dem{" "}
            <a href="https://www.cloudflare.com/cloudflare-customer-dpa/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">
              Datenverarbeitungszusatz von Cloudflare
            </a>.
          </p>
          <p className="mt-3">
            Rechtsgrundlage für die Nutzung von Cloudflare ist Art. 6 Abs. 1 lit. f DSGVO. Unser
            berechtigtes Interesse besteht in der sicheren und effizienten Bereitstellung dieser Website.
          </p>
        </Section>

        <Section title="5. Kontaktformular">
          <p>
            Diese Website enthält ein Kontaktformular, über das Besucherinnen und Besucher Anfragen
            senden können.
          </p>
          <p className="mt-3">
            Wenn Sie das Kontaktformular nutzen, verarbeiten wir die von Ihnen angegebenen
            Informationen, darunter:
          </p>
          <ul className="mt-3 space-y-1 list-disc list-inside">
            {[
              "Name",
              "Nachname",
              "E-Mail-Adresse",
              "Eventtyp",
              "Gruppengröße",
              "Nachrichteninhalt",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-3">
            Diese Informationen verwenden wir, um Ihre Anfrage zu beantworten, mit Ihnen zu
            kommunizieren und ggf. vorvertragliche oder vertragliche Maßnahmen einzuleiten oder
            durchzuführen.
          </p>
          <p className="mt-3">
            Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, soweit es sich um
            vorvertragliche oder vertragliche Kommunikation handelt. In anderen Fällen ist die
            Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse besteht darin,
            auf an uns gerichtete Anfragen zu antworten.
          </p>
        </Section>

        <Section title="6. Formularverarbeitung über Formspree">
          <p>
            Das Kontaktformular wird über <strong>Formspree</strong>, einen Dienst der Formspree, Inc.,
            USA, verarbeitet.
          </p>
          <p className="mt-3">
            Wir nutzen Formspree ausschließlich für die technische Übermittlung und Weiterleitung von
            Kontaktformularnachrichten. Wenn Sie das Kontaktformular absenden, werden die im Formular
            eingegebenen Informationen an Formspree übertragen und anschließend per E-Mail an uns
            weitergeleitet. Formspree handelt als Dienstleister für die technische Verarbeitung des
            Kontaktformulars.
          </p>
          <p className="mt-3">
            Daten können außerhalb des Europäischen Wirtschaftsraums verarbeitet werden. Soweit
            erforderlich, nutzt Formspree geeignete Schutzmaßnahmen für internationale
            Datenübermittlungen, einschließlich Standardvertragsklauseln.
          </p>
          <p className="mt-3">
            Weitere Informationen finden Sie in der{" "}
            <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">
              Datenschutzerklärung von Formspree
            </a>{" "}
            und den{" "}
            <a href="https://formspree.io/security/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">
              Sicherheits- und DSGVO-Informationen von Formspree
            </a>.
          </p>
          <p className="mt-3">
            Rechtsgrundlage für die Nutzung von Formspree ist Art. 6 Abs. 1 lit. f DSGVO. Unser
            berechtigtes Interesse besteht darin, ein zuverlässiges und sicheres Kontaktformular auf
            einer statischen Website bereitzustellen.
          </p>
        </Section>

        <Section title="7. E-Mail-Kommunikation über Zoho Mail">
          <p>
            Über das Kontaktformular eingereichte Nachrichten werden an ein dediziertes E-Mail-Postfach
            dieser Website weitergeleitet, das bei <strong>Zoho Mail</strong> gehostet wird.
          </p>
          <p className="mt-3">
            Wir nutzen Zoho Mail für die E-Mail-Kommunikation im Zusammenhang mit Anfragen, die über
            diese Website eingehen. Wir verarbeiten den Inhalt Ihrer Nachricht sowie die zugehörigen
            Kontaktdaten, um auf Ihre Anfrage zu antworten und die Kommunikation zu verwalten.
          </p>
          <p className="mt-3">
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Kommunikation vorvertragliche
            oder vertragliche Angelegenheiten betrifft. Andernfalls ist die Rechtsgrundlage Art. 6 Abs.
            1 lit. f DSGVO. Unser berechtigtes Interesse besteht in einer effizienten und zuverlässigen
            Kommunikation mit Personen, die uns kontaktieren.
          </p>
          <p className="mt-3">
            Daten können von Zoho-Konzerngesellschaften oder Dienstleistern außerhalb des Europäischen
            Wirtschaftsraums verarbeitet werden. Soweit erforderlich, nutzt Zoho geeignete
            Schutzmaßnahmen für internationale Datenübermittlungen, einschließlich
            Standardvertragsklauseln oder gleichwertiger vertraglicher Schutzmaßnahmen.
          </p>
          <p className="mt-3">
            Weitere Informationen finden Sie in der{" "}
            <a href="https://www.zoho.com/privacy.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">
              Datenschutzerklärung von Zoho
            </a>,{" "}
            den{" "}
            <a href="https://www.zoho.com/mail/data-privacy.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">
              Datenschutzinformationen von Zoho Mail
            </a>,{" "}
            den{" "}
            <a href="https://www.zoho.com/mail/secure-email.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">
              Sicherheitsinformationen von Zoho Mail
            </a>{" "}
            und den{" "}
            <a href="https://www.zoho.com/gdpr.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">
              DSGVO-Informationen von Zoho
            </a>.
            Informationen zum Datenverarbeitungszusatz von Zoho finden Sie im{" "}
            <a href="https://help.zoho.com/portal/en/kb/accounts/manage-your-zoho-account/articles/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">
              DPA-Hilfeartikel von Zoho
            </a>.
          </p>
        </Section>

        <Section title="8. Keine Analyse- oder Marketing-Tracking">
          <p>
            Wir verwenden keine Web-Analyse-Tools wie Google Analytics, Matomo, Plausible,
            Werbe-Pixel oder vergleichbare Marketing-Tracking-Technologien.
          </p>
          <p className="mt-3">
            Technische Dienste, die zur Bereitstellung und Absicherung der Website eingesetzt werden,
            können technisch notwendige Cookies oder lokale Speicherelemente verwenden, um grundlegende
            Funktionen wie Sicherheit, Lastverteilung oder zuverlässige Auslieferung zu erfüllen.
            Rechtsgrundlage für das Speichern und Auslesen dieser technisch notwendigen Kennungen auf
            Ihrem Endgerät ist § 25 Abs. 2 Nr. 2 TDDDG. Eine etwaige anschließende Verarbeitung
            personenbezogener Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (unser
            berechtigtes Interesse am Betrieb einer sicheren Website).
          </p>
        </Section>

        <Section title="9. Cookies">
          <p>
            Diese Website verwendet bewusst keine nicht notwendigen Cookies für Analyse-, Werbe- oder
            Profilierungszwecke.
          </p>
          <p className="mt-3">
            Technische Dienste, die zur Bereitstellung und Absicherung der Website eingesetzt werden,
            können technisch notwendige Cookies oder vergleichbare Technologien für grundlegende
            Funktionen wie Sicherheit, Lastverteilung oder eine zuverlässige Auslieferung der Website
            verwenden. Diese Technologien sind für den Betrieb der Website erforderlich und bedürfen
            nach den geltenden Datenschutzvorschriften keiner Einwilligung.
          </p>
        </Section>

        <Section title="10. Speicherdauer">
          <p>
            Wir speichern personenbezogene Daten nur so lange, wie es für die Zwecke erforderlich ist,
            für die sie erhoben wurden.
          </p>
          <p className="mt-3">
            Kontaktanfragen werden grundsätzlich für den Zeitraum aufbewahrt, der zur Bearbeitung und
            Beantwortung der Anfrage erforderlich ist. Führt eine Anfrage nicht zu einer weiteren
            Kommunikation oder einem Vertragsverhältnis, werden die entsprechenden Daten in der Regel
            innerhalb von 6 Monaten gelöscht.
          </p>
          <p className="mt-3">
            Entsteht aus der Kommunikation ein Vertragsverhältnis, können relevante Daten länger
            aufbewahrt werden, soweit dies für das Vertragsmanagement, die Dokumentation oder die
            Einhaltung gesetzlicher Aufbewahrungspflichten erforderlich ist.
          </p>
        </Section>

        <Section title="11. Empfänger personenbezogener Daten">
          <p>
            Personenbezogene Daten können von den folgenden Dienstleistern verarbeitet werden, soweit
            dies für den Betrieb dieser Website und die Kommunikation mit Besucherinnen und Besuchern
            erforderlich ist:
          </p>
          <ul className="mt-3 space-y-1 list-disc list-inside">
            {[
              "Cloudflare, für Website-Hosting und -Auslieferung",
              "Formspree, für die Kontaktformularverarbeitung",
              "Zoho, für die E-Mail-Kommunikation",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-3">Wir verkaufen keine personenbezogenen Daten.</p>
        </Section>

        <Section title="12. Internationale Datenübermittlungen">
          <p>
            Einige für diese Website eingesetzten Dienstleister haben ihren Sitz außerhalb des
            Europäischen Wirtschaftsraums (EWR), insbesondere in den Vereinigten Staaten. Um ein
            angemessenes Datenschutzniveau sicherzustellen, stützen wir uns für in den USA ansässige
            Anbieter, die im Rahmen dieses Rahmens zertifiziert sind, auf das EU-US Data Privacy
            Framework (DPF). Für Anbieter, die nicht unter das DPF fallen, oder ergänzend dazu werden
            Datenübermittlungen durch die von der Europäischen Kommission gemäß Art. 46 Abs. 2 lit. c
            DSGVO genehmigten Standardvertragsklauseln (SCC) abgesichert.
          </p>
        </Section>

        <Section title="13. Ihre Rechte">
          <p>
            Nach der DSGVO stehen Ihnen — vorbehaltlich der jeweils anwendbaren rechtlichen
            Voraussetzungen — folgende Rechte zu:
          </p>
          <ul className="mt-4 space-y-3 list-none">
            {[
              ["Auskunftsrecht", "Art. 15 DSGVO"],
              ["Recht auf Berichtigung", "Art. 16 DSGVO"],
              ["Recht auf Löschung", "Art. 17 DSGVO"],
              ["Recht auf Einschränkung der Verarbeitung", "Art. 18 DSGVO"],
              ["Recht auf Datenübertragbarkeit", "Art. 20 DSGVO"],
              ["Widerspruchsrecht", "Art. 21 DSGVO"],
              ["Recht auf Widerruf der Einwilligung", "Art. 7 Abs. 3 DSGVO, sofern die Verarbeitung auf einer Einwilligung beruht"],
            ].map(([right, basis]) => (
              <li key={right} className="flex gap-2">
                <span className="text-accent font-black mt-0.5 leading-none flex-shrink-0">→</span>
                <span><strong className="text-foreground">{right}</strong> gemäß {basis}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            Zur Ausübung Ihrer Rechte können Sie uns über die in Abschnitt 1 genannten Kontaktdaten
            erreichen.<br />
            Zuständig ist insbesondere:
            </p>
            <p className="mt-3">
            Berliner Beauftragte für Datenschutz und Informationsfreiheit<br />
            Alt-Moabit 59-61<br />
            10555 Berlin<br />
            Deutschland<br />
            E-Mail: {""}
            <a href="mailto:mailbox@datenschutz-berlin.de" className="underline hover:text-primary transition-colors">
              mailbox@datenschutz-berlin.de
            </a>
          </p>
        </Section>

        <Section title="14. Beschwerderecht">
          <p>
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, wenn Sie
            der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen das
            Datenschutzrecht verstößt.
          </p>
          <p className="mt-3">
            Sie können sich an die Aufsichtsbehörde Ihres Wohnsitzes, Ihres Arbeitsplatzes oder des
            Ortes des mutmaßlichen Verstoßes wenden.
          </p>
        </Section>

        <Section title="15. Widerspruch gegen Verarbeitung auf Grundlage berechtigter Interessen">
          <p>
            Soweit wir personenbezogene Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
            verarbeiten, haben Sie das Recht, dieser Verarbeitung jederzeit aus Gründen, die sich aus
            Ihrer besonderen Situation ergeben, zu widersprechen.
          </p>
          <p className="mt-3">
            Legen Sie Widerspruch ein, verarbeiten wir Ihre personenbezogenen Daten nicht mehr, es sei
            denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre
            Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der
            Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
          </p>
        </Section>

        <Section title="16. Änderungen dieser Datenschutzerklärung">
          <p>
            Wir können diese Datenschutzerklärung aktualisieren, wenn sich die Website, die genutzten
            Dienste oder die gesetzlichen Anforderungen ändern. Die zum Zeitpunkt Ihres Besuchs auf
            dieser Website veröffentlichte Version gilt jeweils als aktuell.
          </p>
        </Section>
      </main>

      <SiteFooter />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10 pb-10 border-b border-border last:border-0">
      <h2 className="font-black text-base tracking-tight mb-4 text-primary">{title}</h2>
      <div className="text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}
