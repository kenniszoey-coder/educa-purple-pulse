import FeaturedMember from "./FeaturedMember";
import MemberCard from "./MemberCard";
import CallToAction from "./CallToAction";

export default function Team() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24">

      {/* INTRO */}

      <div className="mb-14 text-center sm:mb-20">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300 sm:text-base sm:tracking-[0.35em]">
          HET PRAESIDIUM
        </p>

        <h2 className="mt-4 break-words text-4xl font-black leading-tight text-white sm:text-5xl">
          De gezichten achter Educa.
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300 sm:mt-6 sm:text-xl sm:leading-9">
          Van activiteiten organiseren tot foto's maken, communicatie verzorgen
          en de vereniging draaiende houden. Dit is het team achter Educa.
        </p>

      </div>


      {/* PRAESES */}

      <div className="mb-10 sm:mb-14">

        <FeaturedMember
          name="Yannick Heremans"
          role="Praeses"
          image="/images/praesidium/praeses.jpg"
          description="Hallo! Ik ben Yannick, Praeses van Educa en student Bachelor Lager Onderwijs. Met veel enthousiasme zet ik me in om ervoor te zorgen dat Educa voor iedereen aanvoelt als een tweede thuis: een plek waar je jezelf kunt zijn, nieuwe mensen leert kennen en onvergetelijke momenten beleeft. Voor mij is Educa uitgegroeid tot veel meer dan een studentenvereniging: het voelt als een echte familie."
        />

      </div>


      {/* OVERIGE PRAESIDIUMLEDEN */}

      <div className="mb-10 grid min-w-0 gap-7 sm:gap-10 lg:mb-14 lg:grid-cols-2">

        <MemberCard
          name="Stijn Oste"
          role="Vice-praeses"
          image="/images/praesidium/vice-praeses.jpg"
          description="Joew! Ik ben Stijn, jullie Vice-Praeses en de rechterhand van onze Praeses. Samen vormen we een sterk duo en zorgen we ervoor dat alles binnen het praesidium soepel verloopt. Ik ondersteun het hele praesidium en neem taken over waar nodig. Ook organiseer ik onze befaamde Educa-weekends."
        />

        <MemberCard
          name="Milan Van Der Poel"
          role="Quaestor"
          image="/images/praesidium/quaestor.jpg"
          description={`Hey allemaal! Ik ben Milan, 21 jaar, en ik ben ondertussen al 2 jaar actief binnen Hoogstudentenvereniging Educa. Dit jaar neem ik met veel plezier de functie van Quaestor op mij.

Als Quaestor zorg ik ervoor dat de financiële kant van Educa in goede banen wordt geleid. Van inkomsten en uitgaven tot het bijhouden van de boekhouding: ik zorg ervoor dat alles financieel netjes en overzichtelijk blijft.

Naast Educa ben ik ook ploegbaas bij DTS Benelux, waardoor ik graag verantwoordelijkheid opneem en mijn handen uit de mouwen steek. In mijn vrije tijd ben ik vaak te vinden op mijn moto of in de fitness. 🏍️💪

Ik kijk er enorm naar uit om er samen met het hele praesidium een fantastisch jaar van te maken en vooral veel mooie herinneringen te creëren binnen Educa!

Ut vivat, crescat et floreat! 💜`}
        />

        <MemberCard
          name="Zoey Kennis"
          role="PR Ab-Actis"
          image="/images/praesidium/pr-abactis.jpg"
          description="Hey! Ik ben Zoey, PR Ab-Actis van Educa en zit momenteel in mijn laatste jaar Orthopedagogisch Begeleider. In mijn vrije tijd speel ik graag ukulele en spreek ik graag af met vrienden. Mijn favoriete Educa-herinnering? Zonder twijfel het Educaweekend, waar we samen broodlookjes aten in de zetel waar deze foto trouwens ook genomen werd."
        />

        <MemberCard
          name="Ward Verheyen"
          role="Schachtenmeester"
          image="/images/praesidium/schachten-meester.jpg"
          description="Wazzzaaap! Ik ben Ward, Schachtenmeester van Educa. Ik zit momenteel in mijn tweede jaar van de lerarenopleiding lager onderwijs op Thomas More. In mijn vrije tijd geniet ik van sporten en een zalig feestje met een pintje in de hand. Ik kijk ernaar uit om nieuwe schachten op te leiden en ze welkom te heten in deze zalige familie!"
        />

        <MemberCard
          name="Reeza Rombauts"
          role="Schachtentemmer"
          image="/images/praesidium/schachten-temmer.jpg"
          description="Hey! Ik ben Reeza, de Schachtentemmer van Educa. Momenteel zit ik in mijn tweede jaar van de Lerarenopleiding Secundair Onderwijs, waar ik mijn passie voor biologie en Engels helemaal kan uitleven. Naast studeren kan je me meestal vinden met een goed boek, op een feestje of gezellig iets drinken. Dankzij Educa heb ik fantastische mensen leren kennen en herinneringen gemaakt die ik nooit zal vergeten."
        />

        <MemberCard
          name="Kobe Van Herle"
          role="Spocul"
          image="/images/praesidium/spocul.jpg"
          imageFit="contain"
          description="Jeeeep! Tis de Kobe hier. Jullie Spocul voor dit academiejaar. Ik ga nu naar mn 3de jaar BASO dus weet hoe het is om een student te zijn in de Lerarenopleiding. Voor vragen of ideeën ben ik altijd een luisterend oor! Maar vooral voor activiteiten en cantussen kan je me al helemaal vinden! Tot in den draai!"
        />

        <MemberCard
          name="Tygo Bamps"
          role="Cantor"
          image="/images/praesidium/cantor.jpg"
          description={`Ghello!
Ik ben Tygo en dit jaar ben ik al voor een tweede keer Cantor!
Als Cantor ben ik 'het muzikaal kompas' van de cantus: ik zet (meestal) de liedjes in, hou het tempo strak en zorg ervoor dat zelfs de grootste codexsukkel kan meebrullen. Samen met de praeses waak ik over de orde (of toch wat daar nog van overblijft). De liederen kiezen we samen, afgestemd op de sfeer en de gezelligheid van het moment.

Foute noot? No stress, in vino veritas — zolang je zingt met overtuiging, zit je meestal wel goed. Stem kwijt of uit de maat? Dan zing ik gewoon wat harder. Geen probleem, ik ben toch al luid.

Samengevat: lawaai maken en plezant doen met vrienden… dáár draait het om!`}
        />

        <MemberCard
          name="Kevin De Cree"
          role="Manus"
          image="/images/praesidium/manus.jpg"
          imageFit="contain"
          description="Hey, ik ben Kevin, de Manus van Educa. Ik zit in mijn tweede jaar leerkracht secundair (Engels en aardrijkskunde). Voor mij is Educa een soort gekozen familie, en ik wil vooral een aanspreekpunt zijn voor steun. Of da nu over studies gaat, iets persoonlijks of gwn een babbel."
        />

        <MemberCard
          name="Axel De Saedeleir"
          role="Mentor"
          image="/images/praesidium/mentor.jpg"
          description="Hey hey! Ik ben Axel: een open, sociaal en empathisch persoon die graag klaarstaat voor anderen. Ik vind het belangrijk dat iedereen zich welkom, gehoord en goed voelt binnen Educa. Dit jaar ben ik Mentor van het huidige praesidium. Dat betekent dat zij bij mij terechtkunnen met vragen, twijfels of wanneer ze gewoon even hun hart willen luchten. Ik bied graag een luisterend oor en probeer hen zo goed mogelijk te ondersteunen doorheen het jaar."
        />

      </div>


      {/* CALL TO ACTION */}

      <CallToAction />

    </section>
  );
}