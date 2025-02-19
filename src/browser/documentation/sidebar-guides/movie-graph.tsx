/*
 * Copyright (c) "Neo4j"
 * Neo4j Sweden AB [http://neo4j.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react'
import ManualLink from 'browser-components/ManualLink'
import { BuiltInGuideSidebarSlide } from '../../modules/Carousel/Slide'
import { DrawerExternalLink } from 'browser-components/drawer/drawer-styled'

const title = 'Movie Graph Guide'
const category = 'graphExamples'
const identifier = 'movie-graph'
const slides = [
  <BuiltInGuideSidebarSlide key="s1">
    <p>
      <em>The Movie Graph</em> is a mini graph application, containing actors
      and directors that are related through the movies they have collaborated
      on.
    </p>
    <p>This guide shows how to:</p>
    <ol className="big ">
      <li>
        <b>Load:</b> Insert movie data into the graph.
      </li>
      <li>
        <b>Constrain:</b> Create unique node property constraints.
      </li>
      <li>
        <b>Index:</b> Index nodes based on their labels.
      </li>
      <li>
        <b>Find:</b> Retrieve individual movies and actors.
      </li>
      <li>
        <b>Query:</b> Discover related actors and directors.
      </li>
      <li>
        <b>Solve:</b> The Bacon Path.
      </li>
    </ol>
  </BuiltInGuideSidebarSlide>,
  <BuiltInGuideSidebarSlide key="s2">
    <h3>Create</h3>
    <p className="lead">
      <em>Create the movie graph</em>
    </p>
    <p>
      Use the following code block to create the movie graph. It contains a
      single Cypher query statement composed of multiple <code>CREATE</code>{' '}
      clauses.
    </p>
    <p>
      <b>NOTE: </b> This guide assumes that you use an empty graph. If it
      contains data, see page 9 on how to clean it up.
    </p>
    <hr />
    <ol>
      <li>
        Click this code block and bring it into the Editor:
        <pre className="pre-scrollable code runnable">
          {`CREATE (TheMatrix:Movie {title:'The Matrix', released:1999, tagline:'Welcome to the Real World'})
      CREATE (Keanu:Person {name:'Keanu Reeves', born:1964})
      CREATE (Carrie:Person {name:'Carrie-Anne Moss', born:1967})
      CREATE (Laurence:Person {name:'Laurence Fishburne', born:1961})
      CREATE (Hugo:Person {name:'Hugo Weaving', born:1960})
      CREATE (LillyW:Person {name:'Lilly Wachowski', born:1967})
      CREATE (LanaW:Person {name:'Lana Wachowski', born:1965})
      CREATE (JoelS:Person {name:'Joel Silver', born:1952})
      CREATE
      (Keanu)-[:ACTED_IN {roles:['Neo']}]->(TheMatrix),
      (Carrie)-[:ACTED_IN {roles:['Trinity']}]->(TheMatrix),
      (Laurence)-[:ACTED_IN {roles:['Morpheus']}]->(TheMatrix),
      (Hugo)-[:ACTED_IN {roles:['Agent Smith']}]->(TheMatrix),
      (LillyW)-[:DIRECTED]->(TheMatrix),
      (LanaW)-[:DIRECTED]->(TheMatrix),
      (JoelS)-[:PRODUCED]->(TheMatrix)

      CREATE (Emil:Person {name:"Emil Eifrem", born:1978})
      CREATE (Emil)-[:ACTED_IN {roles:["Emil"]}]->(TheMatrix)

      CREATE (TheMatrixReloaded:Movie {title:'The Matrix Reloaded', released:2003, tagline:'Free your mind'})
      CREATE
      (Keanu)-[:ACTED_IN {roles:['Neo']}]->(TheMatrixReloaded),
      (Carrie)-[:ACTED_IN {roles:['Trinity']}]->(TheMatrixReloaded),
      (Laurence)-[:ACTED_IN {roles:['Morpheus']}]->(TheMatrixReloaded),
      (Hugo)-[:ACTED_IN {roles:['Agent Smith']}]->(TheMatrixReloaded),
      (LillyW)-[:DIRECTED]->(TheMatrixReloaded),
      (LanaW)-[:DIRECTED]->(TheMatrixReloaded),
      (JoelS)-[:PRODUCED]->(TheMatrixReloaded)

      CREATE (TheMatrixRevolutions:Movie {title:'The Matrix Revolutions', released:2003, tagline:'Everything that has a beginning has an end'})
      CREATE
      (Keanu)-[:ACTED_IN {roles:['Neo']}]->(TheMatrixRevolutions),
      (Carrie)-[:ACTED_IN {roles:['Trinity']}]->(TheMatrixRevolutions),
      (Laurence)-[:ACTED_IN {roles:['Morpheus']}]->(TheMatrixRevolutions),
      (Hugo)-[:ACTED_IN {roles:['Agent Smith']}]->(TheMatrixRevolutions),
      (LillyW)-[:DIRECTED]->(TheMatrixRevolutions),
      (LanaW)-[:DIRECTED]->(TheMatrixRevolutions),
      (JoelS)-[:PRODUCED]->(TheMatrixRevolutions)

      CREATE (TheDevilsAdvocate:Movie {title:"The Devil's Advocate", released:1997, tagline:'Evil has its winning ways'})
      CREATE (Charlize:Person {name:'Charlize Theron', born:1975})
      CREATE (Al:Person {name:'Al Pacino', born:1940})
      CREATE (Taylor:Person {name:'Taylor Hackford', born:1944})
      CREATE
      (Keanu)-[:ACTED_IN {roles:['Kevin Lomax']}]->(TheDevilsAdvocate),
      (Charlize)-[:ACTED_IN {roles:['Mary Ann Lomax']}]->(TheDevilsAdvocate),
      (Al)-[:ACTED_IN {roles:['John Milton']}]->(TheDevilsAdvocate),
      (Taylor)-[:DIRECTED]->(TheDevilsAdvocate)

      CREATE (AFewGoodMen:Movie {title:"A Few Good Men", released:1992, tagline:"In the heart of the nation's capital, in a courthouse of the U.S. government, one man will stop at nothing to keep his honor, and one will stop at nothing to find the truth."})
      CREATE (TomC:Person {name:'Tom Cruise', born:1962})
      CREATE (JackN:Person {name:'Jack Nicholson', born:1937})
      CREATE (DemiM:Person {name:'Demi Moore', born:1962})
      CREATE (KevinB:Person {name:'Kevin Bacon', born:1958})
      CREATE (KieferS:Person {name:'Kiefer Sutherland', born:1966})
      CREATE (NoahW:Person {name:'Noah Wyle', born:1971})
      CREATE (CubaG:Person {name:'Cuba Gooding Jr.', born:1968})
      CREATE (KevinP:Person {name:'Kevin Pollak', born:1957})
      CREATE (JTW:Person {name:'J.T. Walsh', born:1943})
      CREATE (JamesM:Person {name:'James Marshall', born:1967})
      CREATE (ChristopherG:Person {name:'Christopher Guest', born:1948})
      CREATE (RobR:Person {name:'Rob Reiner', born:1947})
      CREATE (AaronS:Person {name:'Aaron Sorkin', born:1961})
      CREATE
      (TomC)-[:ACTED_IN {roles:['Lt. Daniel Kaffee']}]->(AFewGoodMen),
      (JackN)-[:ACTED_IN {roles:['Col. Nathan R. Jessup']}]->(AFewGoodMen),
      (DemiM)-[:ACTED_IN {roles:['Lt. Cdr. JoAnne Galloway']}]->(AFewGoodMen),
      (KevinB)-[:ACTED_IN {roles:['Capt. Jack Ross']}]->(AFewGoodMen),
      (KieferS)-[:ACTED_IN {roles:['Lt. Jonathan Kendrick']}]->(AFewGoodMen),
      (NoahW)-[:ACTED_IN {roles:['Cpl. Jeffrey Barnes']}]->(AFewGoodMen),
      (CubaG)-[:ACTED_IN {roles:['Cpl. Carl Hammaker']}]->(AFewGoodMen),
      (KevinP)-[:ACTED_IN {roles:['Lt. Sam Weinberg']}]->(AFewGoodMen),
      (JTW)-[:ACTED_IN {roles:['Lt. Col. Matthew Andrew Markinson']}]->(AFewGoodMen),
      (JamesM)-[:ACTED_IN {roles:['Pfc. Louden Downey']}]->(AFewGoodMen),
      (ChristopherG)-[:ACTED_IN {roles:['Dr. Stone']}]->(AFewGoodMen),
      (AaronS)-[:ACTED_IN {roles:['Man in Bar']}]->(AFewGoodMen),
      (RobR)-[:DIRECTED]->(AFewGoodMen),
      (AaronS)-[:WROTE]->(AFewGoodMen)

      CREATE (TopGun:Movie {title:"Top Gun", released:1986, tagline:'I feel the need, the need for speed.'})
      CREATE (KellyM:Person {name:'Kelly McGillis', born:1957})
      CREATE (ValK:Person {name:'Val Kilmer', born:1959})
      CREATE (AnthonyE:Person {name:'Anthony Edwards', born:1962})
      CREATE (TomS:Person {name:'Tom Skerritt', born:1933})
      CREATE (MegR:Person {name:'Meg Ryan', born:1961})
      CREATE (TonyS:Person {name:'Tony Scott', born:1944})
      CREATE (JimC:Person {name:'Jim Cash', born:1941})
      CREATE
      (TomC)-[:ACTED_IN {roles:['Maverick']}]->(TopGun),
      (KellyM)-[:ACTED_IN {roles:['Charlie']}]->(TopGun),
      (ValK)-[:ACTED_IN {roles:['Iceman']}]->(TopGun),
      (AnthonyE)-[:ACTED_IN {roles:['Goose']}]->(TopGun),
      (TomS)-[:ACTED_IN {roles:['Viper']}]->(TopGun),
      (MegR)-[:ACTED_IN {roles:['Carole']}]->(TopGun),
      (TonyS)-[:DIRECTED]->(TopGun),
      (JimC)-[:WROTE]->(TopGun)

      CREATE (JerryMaguire:Movie {title:'Jerry Maguire', released:2000, tagline:'The rest of his life begins now.'})
      CREATE (ReneeZ:Person {name:'Renee Zellweger', born:1969})
      CREATE (KellyP:Person {name:'Kelly Preston', born:1962})
      CREATE (JerryO:Person {name:"Jerry O'Connell", born:1974})
      CREATE (JayM:Person {name:'Jay Mohr', born:1970})
      CREATE (BonnieH:Person {name:'Bonnie Hunt', born:1961})
      CREATE (ReginaK:Person {name:'Regina King', born:1971})
      CREATE (JonathanL:Person {name:'Jonathan Lipnicki', born:1996})
      CREATE (CameronC:Person {name:'Cameron Crowe', born:1957})
      CREATE
      (TomC)-[:ACTED_IN {roles:['Jerry Maguire']}]->(JerryMaguire),
      (CubaG)-[:ACTED_IN {roles:['Rod Tidwell']}]->(JerryMaguire),
      (ReneeZ)-[:ACTED_IN {roles:['Dorothy Boyd']}]->(JerryMaguire),
      (KellyP)-[:ACTED_IN {roles:['Avery Bishop']}]->(JerryMaguire),
      (JerryO)-[:ACTED_IN {roles:['Frank Cushman']}]->(JerryMaguire),
      (JayM)-[:ACTED_IN {roles:['Bob Sugar']}]->(JerryMaguire),
      (BonnieH)-[:ACTED_IN {roles:['Laurel Boyd']}]->(JerryMaguire),
      (ReginaK)-[:ACTED_IN {roles:['Marcee Tidwell']}]->(JerryMaguire),
      (JonathanL)-[:ACTED_IN {roles:['Ray Boyd']}]->(JerryMaguire),
      (CameronC)-[:DIRECTED]->(JerryMaguire),
      (CameronC)-[:PRODUCED]->(JerryMaguire),
      (CameronC)-[:WROTE]->(JerryMaguire)

      CREATE (StandByMe:Movie {title:"Stand By Me", released:1986, tagline:"For some, it's the last real taste of innocence, and the first real taste of life. But for everyone, it's the time that memories are made of."})
      CREATE (RiverP:Person {name:'River Phoenix', born:1970})
      CREATE (CoreyF:Person {name:'Corey Feldman', born:1971})
      CREATE (WilW:Person {name:'Wil Wheaton', born:1972})
      CREATE (JohnC:Person {name:'John Cusack', born:1966})
      CREATE (MarshallB:Person {name:'Marshall Bell', born:1942})
      CREATE
      (WilW)-[:ACTED_IN {roles:['Gordie Lachance']}]->(StandByMe),
      (RiverP)-[:ACTED_IN {roles:['Chris Chambers']}]->(StandByMe),
      (JerryO)-[:ACTED_IN {roles:['Vern Tessio']}]->(StandByMe),
      (CoreyF)-[:ACTED_IN {roles:['Teddy Duchamp']}]->(StandByMe),
      (JohnC)-[:ACTED_IN {roles:['Denny Lachance']}]->(StandByMe),
      (KieferS)-[:ACTED_IN {roles:['Ace Merrill']}]->(StandByMe),
      (MarshallB)-[:ACTED_IN {roles:['Mr. Lachance']}]->(StandByMe),
      (RobR)-[:DIRECTED]->(StandByMe)

      CREATE (AsGoodAsItGets:Movie {title:'As Good as It Gets', released:1997, tagline:'A comedy from the heart that goes for the throat.'})
      CREATE (HelenH:Person {name:'Helen Hunt', born:1963})
      CREATE (GregK:Person {name:'Greg Kinnear', born:1963})
      CREATE (JamesB:Person {name:'James L. Brooks', born:1940})
      CREATE
      (JackN)-[:ACTED_IN {roles:['Melvin Udall']}]->(AsGoodAsItGets),
      (HelenH)-[:ACTED_IN {roles:['Carol Connelly']}]->(AsGoodAsItGets),
      (GregK)-[:ACTED_IN {roles:['Simon Bishop']}]->(AsGoodAsItGets),
      (CubaG)-[:ACTED_IN {roles:['Frank Sachs']}]->(AsGoodAsItGets),
      (JamesB)-[:DIRECTED]->(AsGoodAsItGets)

      CREATE (WhatDreamsMayCome:Movie {title:'What Dreams May Come', released:1998, tagline:'After life there is more. The end is just the beginning.'})
      CREATE (AnnabellaS:Person {name:'Annabella Sciorra', born:1960})
      CREATE (MaxS:Person {name:'Max von Sydow', born:1929})
      CREATE (WernerH:Person {name:'Werner Herzog', born:1942})
      CREATE (Robin:Person {name:'Robin Williams', born:1951})
      CREATE (VincentW:Person {name:'Vincent Ward', born:1956})
      CREATE
      (Robin)-[:ACTED_IN {roles:['Chris Nielsen']}]->(WhatDreamsMayCome),
      (CubaG)-[:ACTED_IN {roles:['Albert Lewis']}]->(WhatDreamsMayCome),
      (AnnabellaS)-[:ACTED_IN {roles:['Annie Collins-Nielsen']}]->(WhatDreamsMayCome),
      (MaxS)-[:ACTED_IN {roles:['The Tracker']}]->(WhatDreamsMayCome),
      (WernerH)-[:ACTED_IN {roles:['The Face']}]->(WhatDreamsMayCome),
      (VincentW)-[:DIRECTED]->(WhatDreamsMayCome)

      CREATE (SnowFallingonCedars:Movie {title:'Snow Falling on Cedars', released:1999, tagline:'First loves last. Forever.'})
      CREATE (EthanH:Person {name:'Ethan Hawke', born:1970})
      CREATE (RickY:Person {name:'Rick Yune', born:1971})
      CREATE (JamesC:Person {name:'James Cromwell', born:1940})
      CREATE (ScottH:Person {name:'Scott Hicks', born:1953})
      CREATE
      (EthanH)-[:ACTED_IN {roles:['Ishmael Chambers']}]->(SnowFallingonCedars),
      (RickY)-[:ACTED_IN {roles:['Kazuo Miyamoto']}]->(SnowFallingonCedars),
      (MaxS)-[:ACTED_IN {roles:['Nels Gudmundsson']}]->(SnowFallingonCedars),
      (JamesC)-[:ACTED_IN {roles:['Judge Fielding']}]->(SnowFallingonCedars),
      (ScottH)-[:DIRECTED]->(SnowFallingonCedars)

      CREATE (YouveGotMail:Movie {title:"You've Got Mail", released:1998, tagline:'At odds in life... in love on-line.'})
      CREATE (ParkerP:Person {name:'Parker Posey', born:1968})
      CREATE (DaveC:Person {name:'Dave Chappelle', born:1973})
      CREATE (SteveZ:Person {name:'Steve Zahn', born:1967})
      CREATE (TomH:Person {name:'Tom Hanks', born:1956})
      CREATE (NoraE:Person {name:'Nora Ephron', born:1941})
      CREATE
      (TomH)-[:ACTED_IN {roles:['Joe Fox']}]->(YouveGotMail),
      (MegR)-[:ACTED_IN {roles:['Kathleen Kelly']}]->(YouveGotMail),
      (GregK)-[:ACTED_IN {roles:['Frank Navasky']}]->(YouveGotMail),
      (ParkerP)-[:ACTED_IN {roles:['Patricia Eden']}]->(YouveGotMail),
      (DaveC)-[:ACTED_IN {roles:['Kevin Jackson']}]->(YouveGotMail),
      (SteveZ)-[:ACTED_IN {roles:['George Pappas']}]->(YouveGotMail),
      (NoraE)-[:DIRECTED]->(YouveGotMail)

      CREATE (SleeplessInSeattle:Movie {title:'Sleepless in Seattle', released:1993, tagline:'What if someone you never met, someone you never saw, someone you never knew was the only someone for you?'})
      CREATE (RitaW:Person {name:'Rita Wilson', born:1956})
      CREATE (BillPull:Person {name:'Bill Pullman', born:1953})
      CREATE (VictorG:Person {name:'Victor Garber', born:1949})
      CREATE (RosieO:Person {name:"Rosie O'Donnell", born:1962})
      CREATE
      (TomH)-[:ACTED_IN {roles:['Sam Baldwin']}]->(SleeplessInSeattle),
      (MegR)-[:ACTED_IN {roles:['Annie Reed']}]->(SleeplessInSeattle),
      (RitaW)-[:ACTED_IN {roles:['Suzy']}]->(SleeplessInSeattle),
      (BillPull)-[:ACTED_IN {roles:['Walter']}]->(SleeplessInSeattle),
      (VictorG)-[:ACTED_IN {roles:['Greg']}]->(SleeplessInSeattle),
      (RosieO)-[:ACTED_IN {roles:['Becky']}]->(SleeplessInSeattle),
      (NoraE)-[:DIRECTED]->(SleeplessInSeattle)

      CREATE (JoeVersustheVolcano:Movie {title:'Joe Versus the Volcano', released:1990, tagline:'A story of love, lava and burning desire.'})
      CREATE (JohnS:Person {name:'John Patrick Stanley', born:1950})
      CREATE (Nathan:Person {name:'Nathan Lane', born:1956})
      CREATE
      (TomH)-[:ACTED_IN {roles:['Joe Banks']}]->(JoeVersustheVolcano),
      (MegR)-[:ACTED_IN {roles:['DeDe', 'Angelica Graynamore', 'Patricia Graynamore']}]->(JoeVersustheVolcano),
      (Nathan)-[:ACTED_IN {roles:['Baw']}]->(JoeVersustheVolcano),
      (JohnS)-[:DIRECTED]->(JoeVersustheVolcano)

      CREATE (WhenHarryMetSally:Movie {title:'When Harry Met Sally', released:1998, tagline:'Can two friends sleep together and still love each other in the morning?'})
      CREATE (BillyC:Person {name:'Billy Crystal', born:1948})
      CREATE (CarrieF:Person {name:'Carrie Fisher', born:1956})
      CREATE (BrunoK:Person {name:'Bruno Kirby', born:1949})
      CREATE
      (BillyC)-[:ACTED_IN {roles:['Harry Burns']}]->(WhenHarryMetSally),
      (MegR)-[:ACTED_IN {roles:['Sally Albright']}]->(WhenHarryMetSally),
      (CarrieF)-[:ACTED_IN {roles:['Marie']}]->(WhenHarryMetSally),
      (BrunoK)-[:ACTED_IN {roles:['Jess']}]->(WhenHarryMetSally),
      (RobR)-[:DIRECTED]->(WhenHarryMetSally),
      (RobR)-[:PRODUCED]->(WhenHarryMetSally),
      (NoraE)-[:PRODUCED]->(WhenHarryMetSally),
      (NoraE)-[:WROTE]->(WhenHarryMetSally)

      CREATE (ThatThingYouDo:Movie {title:'That Thing You Do', released:1996, tagline:'In every life there comes a time when that thing you dream becomes that thing you do'})
      CREATE (LivT:Person {name:'Liv Tyler', born:1977})
      CREATE
      (TomH)-[:ACTED_IN {roles:['Mr. White']}]->(ThatThingYouDo),
      (LivT)-[:ACTED_IN {roles:['Faye Dolan']}]->(ThatThingYouDo),
      (Charlize)-[:ACTED_IN {roles:['Tina']}]->(ThatThingYouDo),
      (TomH)-[:DIRECTED]->(ThatThingYouDo)

      CREATE (TheReplacements:Movie {title:'The Replacements', released:2000, tagline:'Pain heals, Chicks dig scars... Glory lasts forever'})
      CREATE (Brooke:Person {name:'Brooke Langton', born:1970})
      CREATE (Gene:Person {name:'Gene Hackman', born:1930})
      CREATE (Orlando:Person {name:'Orlando Jones', born:1968})
      CREATE (Howard:Person {name:'Howard Deutch', born:1950})
      CREATE
      (Keanu)-[:ACTED_IN {roles:['Shane Falco']}]->(TheReplacements),
      (Brooke)-[:ACTED_IN {roles:['Annabelle Farrell']}]->(TheReplacements),
      (Gene)-[:ACTED_IN {roles:['Jimmy McGinty']}]->(TheReplacements),
      (Orlando)-[:ACTED_IN {roles:['Clifford Franklin']}]->(TheReplacements),
      (Howard)-[:DIRECTED]->(TheReplacements)

      CREATE (RescueDawn:Movie {title:'RescueDawn', released:2006, tagline:"Based on the extraordinary true story of one man's fight for freedom"})
      CREATE (ChristianB:Person {name:'Christian Bale', born:1974})
      CREATE (ZachG:Person {name:'Zach Grenier', born:1954})
      CREATE
      (MarshallB)-[:ACTED_IN {roles:['Admiral']}]->(RescueDawn),
      (ChristianB)-[:ACTED_IN {roles:['Dieter Dengler']}]->(RescueDawn),
      (ZachG)-[:ACTED_IN {roles:['Squad Leader']}]->(RescueDawn),
      (SteveZ)-[:ACTED_IN {roles:['Duane']}]->(RescueDawn),
      (WernerH)-[:DIRECTED]->(RescueDawn)

      CREATE (TheBirdcage:Movie {title:'The Birdcage', released:1996, tagline:'Come as you are'})
      CREATE (MikeN:Person {name:'Mike Nichols', born:1931})
      CREATE
      (Robin)-[:ACTED_IN {roles:['Armand Goldman']}]->(TheBirdcage),
      (Nathan)-[:ACTED_IN {roles:['Albert Goldman']}]->(TheBirdcage),
      (Gene)-[:ACTED_IN {roles:['Sen. Kevin Keeley']}]->(TheBirdcage),
      (MikeN)-[:DIRECTED]->(TheBirdcage)

      CREATE (Unforgiven:Movie {title:'Unforgiven', released:1992, tagline:"It's a hell of a thing, killing a man"})
      CREATE (RichardH:Person {name:'Richard Harris', born:1930})
      CREATE (ClintE:Person {name:'Clint Eastwood', born:1930})
      CREATE
      (RichardH)-[:ACTED_IN {roles:['English Bob']}]->(Unforgiven),
      (ClintE)-[:ACTED_IN {roles:['Bill Munny']}]->(Unforgiven),
      (Gene)-[:ACTED_IN {roles:['Little Bill Daggett']}]->(Unforgiven),
      (ClintE)-[:DIRECTED]->(Unforgiven)

      CREATE (JohnnyMnemonic:Movie {title:'Johnny Mnemonic', released:1995, tagline:'The hottest data on earth. In the coolest head in town'})
      CREATE (Takeshi:Person {name:'Takeshi Kitano', born:1947})
      CREATE (Dina:Person {name:'Dina Meyer', born:1968})
      CREATE (IceT:Person {name:'Ice-T', born:1958})
      CREATE (RobertL:Person {name:'Robert Longo', born:1953})
      CREATE
      (Keanu)-[:ACTED_IN {roles:['Johnny Mnemonic']}]->(JohnnyMnemonic),
      (Takeshi)-[:ACTED_IN {roles:['Takahashi']}]->(JohnnyMnemonic),
      (Dina)-[:ACTED_IN {roles:['Jane']}]->(JohnnyMnemonic),
      (IceT)-[:ACTED_IN {roles:['J-Bone']}]->(JohnnyMnemonic),
      (RobertL)-[:DIRECTED]->(JohnnyMnemonic)

      CREATE (CloudAtlas:Movie {title:'Cloud Atlas', released:2012, tagline:'Everything is connected'})
      CREATE (HalleB:Person {name:'Halle Berry', born:1966})
      CREATE (JimB:Person {name:'Jim Broadbent', born:1949})
      CREATE (TomT:Person {name:'Tom Tykwer', born:1965})
      CREATE (DavidMitchell:Person {name:'David Mitchell', born:1969})
      CREATE (StefanArndt:Person {name:'Stefan Arndt', born:1961})
      CREATE
      (TomH)-[:ACTED_IN {roles:['Zachry', 'Dr. Henry Goose', 'Isaac Sachs', 'Dermot Hoggins']}]->(CloudAtlas),
      (Hugo)-[:ACTED_IN {roles:['Bill Smoke', 'Haskell Moore', 'Tadeusz Kesselring', 'Nurse Noakes', 'Boardman Mephi', 'Old Georgie']}]->(CloudAtlas),
      (HalleB)-[:ACTED_IN {roles:['Luisa Rey', 'Jocasta Ayrs', 'Ovid', 'Meronym']}]->(CloudAtlas),
      (JimB)-[:ACTED_IN {roles:['Vyvyan Ayrs', 'Captain Molyneux', 'Timothy Cavendish']}]->(CloudAtlas),
      (TomT)-[:DIRECTED]->(CloudAtlas),
      (LillyW)-[:DIRECTED]->(CloudAtlas),
      (LanaW)-[:DIRECTED]->(CloudAtlas),
      (DavidMitchell)-[:WROTE]->(CloudAtlas),
      (StefanArndt)-[:PRODUCED]->(CloudAtlas)

      CREATE (TheDaVinciCode:Movie {title:'The Da Vinci Code', released:2006, tagline:'Break The Codes'})
      CREATE (IanM:Person {name:'Ian McKellen', born:1939})
      CREATE (AudreyT:Person {name:'Audrey Tautou', born:1976})
      CREATE (PaulB:Person {name:'Paul Bettany', born:1971})
      CREATE (RonH:Person {name:'Ron Howard', born:1954})
      CREATE
      (TomH)-[:ACTED_IN {roles:['Dr. Robert Langdon']}]->(TheDaVinciCode),
      (IanM)-[:ACTED_IN {roles:['Sir Leight Teabing']}]->(TheDaVinciCode),
      (AudreyT)-[:ACTED_IN {roles:['Sophie Neveu']}]->(TheDaVinciCode),
      (PaulB)-[:ACTED_IN {roles:['Silas']}]->(TheDaVinciCode),
      (RonH)-[:DIRECTED]->(TheDaVinciCode)

      CREATE (VforVendetta:Movie {title:'V for Vendetta', released:2006, tagline:'Freedom! Forever!'})
      CREATE (NatalieP:Person {name:'Natalie Portman', born:1981})
      CREATE (StephenR:Person {name:'Stephen Rea', born:1946})
      CREATE (JohnH:Person {name:'John Hurt', born:1940})
      CREATE (BenM:Person {name: 'Ben Miles', born:1967})
      CREATE
      (Hugo)-[:ACTED_IN {roles:['V']}]->(VforVendetta),
      (NatalieP)-[:ACTED_IN {roles:['Evey Hammond']}]->(VforVendetta),
      (StephenR)-[:ACTED_IN {roles:['Eric Finch']}]->(VforVendetta),
      (JohnH)-[:ACTED_IN {roles:['High Chancellor Adam Sutler']}]->(VforVendetta),
      (BenM)-[:ACTED_IN {roles:['Dascomb']}]->(VforVendetta),
      (JamesM)-[:DIRECTED]->(VforVendetta),
      (LillyW)-[:PRODUCED]->(VforVendetta),
      (LanaW)-[:PRODUCED]->(VforVendetta),
      (JoelS)-[:PRODUCED]->(VforVendetta),
      (LillyW)-[:WROTE]->(VforVendetta),
      (LanaW)-[:WROTE]->(VforVendetta)

      CREATE (SpeedRacer:Movie {title:'Speed Racer', released:2008, tagline:'Speed has no limits'})
      CREATE (EmileH:Person {name:'Emile Hirsch', born:1985})
      CREATE (JohnG:Person {name:'John Goodman', born:1960})
      CREATE (SusanS:Person {name:'Susan Sarandon', born:1946})
      CREATE (MatthewF:Person {name:'Matthew Fox', born:1966})
      CREATE (ChristinaR:Person {name:'Christina Ricci', born:1980})
      CREATE (Rain:Person {name:'Rain', born:1982})
      CREATE
      (EmileH)-[:ACTED_IN {roles:['Speed Racer']}]->(SpeedRacer),
      (JohnG)-[:ACTED_IN {roles:['Pops']}]->(SpeedRacer),
      (SusanS)-[:ACTED_IN {roles:['Mom']}]->(SpeedRacer),
      (MatthewF)-[:ACTED_IN {roles:['Racer X']}]->(SpeedRacer),
      (ChristinaR)-[:ACTED_IN {roles:['Trixie']}]->(SpeedRacer),
      (Rain)-[:ACTED_IN {roles:['Taejo Togokahn']}]->(SpeedRacer),
      (BenM)-[:ACTED_IN {roles:['Cass Jones']}]->(SpeedRacer),
      (LillyW)-[:DIRECTED]->(SpeedRacer),
      (LanaW)-[:DIRECTED]->(SpeedRacer),
      (LillyW)-[:WROTE]->(SpeedRacer),
      (LanaW)-[:WROTE]->(SpeedRacer),
      (JoelS)-[:PRODUCED]->(SpeedRacer)

      CREATE (NinjaAssassin:Movie {title:'Ninja Assassin', released:2009, tagline:'Prepare to enter a secret world of assassins'})
      CREATE (NaomieH:Person {name:'Naomie Harris'})
      CREATE
      (Rain)-[:ACTED_IN {roles:['Raizo']}]->(NinjaAssassin),
      (NaomieH)-[:ACTED_IN {roles:['Mika Coretti']}]->(NinjaAssassin),
      (RickY)-[:ACTED_IN {roles:['Takeshi']}]->(NinjaAssassin),
      (BenM)-[:ACTED_IN {roles:['Ryan Maslow']}]->(NinjaAssassin),
      (JamesM)-[:DIRECTED]->(NinjaAssassin),
      (LillyW)-[:PRODUCED]->(NinjaAssassin),
      (LanaW)-[:PRODUCED]->(NinjaAssassin),
      (JoelS)-[:PRODUCED]->(NinjaAssassin)

      CREATE (TheGreenMile:Movie {title:'The Green Mile', released:1999, tagline:"Walk a mile you'll never forget."})
      CREATE (MichaelD:Person {name:'Michael Clarke Duncan', born:1957})
      CREATE (DavidM:Person {name:'David Morse', born:1953})
      CREATE (SamR:Person {name:'Sam Rockwell', born:1968})
      CREATE (GaryS:Person {name:'Gary Sinise', born:1955})
      CREATE (PatriciaC:Person {name:'Patricia Clarkson', born:1959})
      CREATE (FrankD:Person {name:'Frank Darabont', born:1959})
      CREATE
      (TomH)-[:ACTED_IN {roles:['Paul Edgecomb']}]->(TheGreenMile),
      (MichaelD)-[:ACTED_IN {roles:['John Coffey']}]->(TheGreenMile),
      (DavidM)-[:ACTED_IN {roles:['Brutus "Brutal" Howell']}]->(TheGreenMile),
      (BonnieH)-[:ACTED_IN {roles:['Jan Edgecomb']}]->(TheGreenMile),
      (JamesC)-[:ACTED_IN {roles:['Warden Hal Moores']}]->(TheGreenMile),
      (SamR)-[:ACTED_IN {roles:['"Wild Bill" Wharton']}]->(TheGreenMile),
      (GaryS)-[:ACTED_IN {roles:['Burt Hammersmith']}]->(TheGreenMile),
      (PatriciaC)-[:ACTED_IN {roles:['Melinda Moores']}]->(TheGreenMile),
      (FrankD)-[:DIRECTED]->(TheGreenMile)

      CREATE (FrostNixon:Movie {title:'Frost/Nixon', released:2008, tagline:'400 million people were waiting for the truth.'})
      CREATE (FrankL:Person {name:'Frank Langella', born:1938})
      CREATE (MichaelS:Person {name:'Michael Sheen', born:1969})
      CREATE (OliverP:Person {name:'Oliver Platt', born:1960})
      CREATE
      (FrankL)-[:ACTED_IN {roles:['Richard Nixon']}]->(FrostNixon),
      (MichaelS)-[:ACTED_IN {roles:['David Frost']}]->(FrostNixon),
      (KevinB)-[:ACTED_IN {roles:['Jack Brennan']}]->(FrostNixon),
      (OliverP)-[:ACTED_IN {roles:['Bob Zelnick']}]->(FrostNixon),
      (SamR)-[:ACTED_IN {roles:['James Reston, Jr.']}]->(FrostNixon),
      (RonH)-[:DIRECTED]->(FrostNixon)

      CREATE (Hoffa:Movie {title:'Hoffa', released:1992, tagline:"He didn't want law. He wanted justice."})
      CREATE (DannyD:Person {name:'Danny DeVito', born:1944})
      CREATE (JohnR:Person {name:'John C. Reilly', born:1965})
      CREATE
      (JackN)-[:ACTED_IN {roles:['Hoffa']}]->(Hoffa),
      (DannyD)-[:ACTED_IN {roles:['Robert "Bobby" Ciaro']}]->(Hoffa),
      (JTW)-[:ACTED_IN {roles:['Frank Fitzsimmons']}]->(Hoffa),
      (JohnR)-[:ACTED_IN {roles:['Peter "Pete" Connelly']}]->(Hoffa),
      (DannyD)-[:DIRECTED]->(Hoffa)

      CREATE (Apollo13:Movie {title:'Apollo 13', released:1995, tagline:'Houston, we have a problem.'})
      CREATE (EdH:Person {name:'Ed Harris', born:1950})
      CREATE (BillPax:Person {name:'Bill Paxton', born:1955})
      CREATE
      (TomH)-[:ACTED_IN {roles:['Jim Lovell']}]->(Apollo13),
      (KevinB)-[:ACTED_IN {roles:['Jack Swigert']}]->(Apollo13),
      (EdH)-[:ACTED_IN {roles:['Gene Kranz']}]->(Apollo13),
      (BillPax)-[:ACTED_IN {roles:['Fred Haise']}]->(Apollo13),
      (GaryS)-[:ACTED_IN {roles:['Ken Mattingly']}]->(Apollo13),
      (RonH)-[:DIRECTED]->(Apollo13)

      CREATE (Twister:Movie {title:'Twister', released:1996, tagline:"Don't Breathe. Don't Look Back."})
      CREATE (PhilipH:Person {name:'Philip Seymour Hoffman', born:1967})
      CREATE (JanB:Person {name:'Jan de Bont', born:1943})
      CREATE
      (BillPax)-[:ACTED_IN {roles:['Bill Harding']}]->(Twister),
      (HelenH)-[:ACTED_IN {roles:['Dr. Jo Harding']}]->(Twister),
      (ZachG)-[:ACTED_IN {roles:['Eddie']}]->(Twister),
      (PhilipH)-[:ACTED_IN {roles:['Dustin "Dusty" Davis']}]->(Twister),
      (JanB)-[:DIRECTED]->(Twister)

      CREATE (CastAway:Movie {title:'Cast Away', released:2000, tagline:'At the edge of the world, his journey begins.'})
      CREATE (RobertZ:Person {name:'Robert Zemeckis', born:1951})
      CREATE
      (TomH)-[:ACTED_IN {roles:['Chuck Noland']}]->(CastAway),
      (HelenH)-[:ACTED_IN {roles:['Kelly Frears']}]->(CastAway),
      (RobertZ)-[:DIRECTED]->(CastAway)

      CREATE (OneFlewOvertheCuckoosNest:Movie {title:"One Flew Over the Cuckoo's Nest", released:1975, tagline:"If he's crazy, what does that make you?"})
      CREATE (MilosF:Person {name:'Milos Forman', born:1932})
      CREATE
      (JackN)-[:ACTED_IN {roles:['Randle McMurphy']}]->(OneFlewOvertheCuckoosNest),
      (DannyD)-[:ACTED_IN {roles:['Martini']}]->(OneFlewOvertheCuckoosNest),
      (MilosF)-[:DIRECTED]->(OneFlewOvertheCuckoosNest)

      CREATE (SomethingsGottaGive:Movie {title:"Something's Gotta Give", released:2003})
      CREATE (DianeK:Person {name:'Diane Keaton', born:1946})
      CREATE (NancyM:Person {name:'Nancy Meyers', born:1949})
      CREATE
      (JackN)-[:ACTED_IN {roles:['Harry Sanborn']}]->(SomethingsGottaGive),
      (DianeK)-[:ACTED_IN {roles:['Erica Barry']}]->(SomethingsGottaGive),
      (Keanu)-[:ACTED_IN {roles:['Julian Mercer']}]->(SomethingsGottaGive),
      (NancyM)-[:DIRECTED]->(SomethingsGottaGive),
      (NancyM)-[:PRODUCED]->(SomethingsGottaGive),
      (NancyM)-[:WROTE]->(SomethingsGottaGive)

      CREATE (BicentennialMan:Movie {title:'Bicentennial Man', released:1999, tagline:"One robot's 200 year journey to become an ordinary man."})
      CREATE (ChrisC:Person {name:'Chris Columbus', born:1958})
      CREATE
      (Robin)-[:ACTED_IN {roles:['Andrew Marin']}]->(BicentennialMan),
      (OliverP)-[:ACTED_IN {roles:['Rupert Burns']}]->(BicentennialMan),
      (ChrisC)-[:DIRECTED]->(BicentennialMan)

      CREATE (CharlieWilsonsWar:Movie {title:"Charlie Wilson's War", released:2007, tagline:"A stiff drink. A little mascara. A lot of nerve. Who said they couldn't bring down the Soviet empire."})
      CREATE (JuliaR:Person {name:'Julia Roberts', born:1967})
      CREATE
      (TomH)-[:ACTED_IN {roles:['Rep. Charlie Wilson']}]->(CharlieWilsonsWar),
      (JuliaR)-[:ACTED_IN {roles:['Joanne Herring']}]->(CharlieWilsonsWar),
      (PhilipH)-[:ACTED_IN {roles:['Gust Avrakotos']}]->(CharlieWilsonsWar),
      (MikeN)-[:DIRECTED]->(CharlieWilsonsWar)

      CREATE (ThePolarExpress:Movie {title:'The Polar Express', released:2004, tagline:'This Holiday Season... Believe'})
      CREATE
      (TomH)-[:ACTED_IN {roles:['Hero Boy', 'Father', 'Conductor', 'Hobo', 'Scrooge', 'Santa Claus']}]->(ThePolarExpress),
      (RobertZ)-[:DIRECTED]->(ThePolarExpress)

      CREATE (ALeagueofTheirOwn:Movie {title:'A League of Their Own', released:1992, tagline:'Once in a lifetime you get a chance to do something different.'})
      CREATE (Madonna:Person {name:'Madonna', born:1954})
      CREATE (GeenaD:Person {name:'Geena Davis', born:1956})
      CREATE (LoriP:Person {name:'Lori Petty', born:1963})
      CREATE (PennyM:Person {name:'Penny Marshall', born:1943})
      CREATE
      (TomH)-[:ACTED_IN {roles:['Jimmy Dugan']}]->(ALeagueofTheirOwn),
      (GeenaD)-[:ACTED_IN {roles:['Dottie Hinson']}]->(ALeagueofTheirOwn),
      (LoriP)-[:ACTED_IN {roles:['Kit Keller']}]->(ALeagueofTheirOwn),
      (RosieO)-[:ACTED_IN {roles:['Doris Murphy']}]->(ALeagueofTheirOwn),
      (Madonna)-[:ACTED_IN {roles:['"All the Way" Mae Mordabito']}]->(ALeagueofTheirOwn),
      (BillPax)-[:ACTED_IN {roles:['Bob Hinson']}]->(ALeagueofTheirOwn),
      (PennyM)-[:DIRECTED]->(ALeagueofTheirOwn)

      CREATE (PaulBlythe:Person {name:'Paul Blythe'})
      CREATE (AngelaScope:Person {name:'Angela Scope'})
      CREATE (JessicaThompson:Person {name:'Jessica Thompson'})
      CREATE (JamesThompson:Person {name:'James Thompson'})

      CREATE
      (JamesThompson)-[:FOLLOWS]->(JessicaThompson),
      (AngelaScope)-[:FOLLOWS]->(JessicaThompson),
      (PaulBlythe)-[:FOLLOWS]->(AngelaScope)

      CREATE
      (JessicaThompson)-[:REVIEWED {summary:'An amazing journey', rating:95}]->(CloudAtlas),
      (JessicaThompson)-[:REVIEWED {summary:'Silly, but fun', rating:65}]->(TheReplacements),
      (JamesThompson)-[:REVIEWED {summary:'The coolest football movie ever', rating:100}]->(TheReplacements),
      (AngelaScope)-[:REVIEWED {summary:'Pretty funny at times', rating:62}]->(TheReplacements),
      (JessicaThompson)-[:REVIEWED {summary:'Dark, but compelling', rating:85}]->(Unforgiven),
      (JessicaThompson)-[:REVIEWED {summary:"Slapstick redeemed only by the Robin Williams and Gene Hackman's stellar performances", rating:45}]->(TheBirdcage),
      (JessicaThompson)-[:REVIEWED {summary:'A solid romp', rating:68}]->(TheDaVinciCode),
      (JamesThompson)-[:REVIEWED {summary:'Fun, but a little far fetched', rating:65}]->(TheDaVinciCode),
      (JessicaThompson)-[:REVIEWED {summary:'You had me at Jerry', rating:92}]->(JerryMaguire)

      WITH TomH as a
      MATCH (a)-[:ACTED_IN]->(m)<-[:DIRECTED]-(d) RETURN a,m,d LIMIT 10;`}
        </pre>
      </li>
      <li>
        Run the Cypher code by clicking the <b>Run</b> button.
      </li>
      <li> Wait for the operation to finish.</li>
    </ol>
    <hr />
    <p>
      <a help-topic="help">:help</a> <a help-topic="create">CREATE</a>{' '}
      <a help-topic="with">WITH</a> <a help-topic="match">MATCH</a>{' '}
      <a help-topic="return">RETURN</a>
    </p>
  </BuiltInGuideSidebarSlide>,
  <BuiltInGuideSidebarSlide key="s3">
    <h3>Create constraints</h3>
    <p className="lead">
      <em>Unique node property constraints</em>
    </p>
    <p>
      Create unique node property constraints to ensure that property values are
      unique for all nodes with a specific label. Adding the unique constraint,
      implicitly adds an index on that property.
    </p>
    <pre className="pre-scrollable code runnable">
      CREATE CONSTRAINT ON (n:Movie) ASSERT (n.title) IS UNIQUE
    </pre>
    <pre className="pre-scrollable code runnable">
      CREATE CONSTRAINT ON (n:Person) ASSERT (n.name) IS UNIQUE
    </pre>
    <hr />
    <p>
      <a help-topic="help">:help</a> <a help-topic="cypher">cypher</a>{' '}
      <a help-topic="create-constraint-on">CREATE CONSTRAINT ON</a>
    </p>
  </BuiltInGuideSidebarSlide>,
  <BuiltInGuideSidebarSlide key="s4">
    <h3>Index nodes</h3>
    <p className="lead">
      <em>
        Create indexes on one or more properties for all nodes that have a given
        label. Indexes are used to increase search performance.
      </em>
    </p>
    <pre className="pre-scrollable code runnable">
      CREATE INDEX FOR (m:Movie) ON (m.released)
    </pre>
    <hr />
    <p>
      <a help-topic="help">:help</a> <a help-topic="cypher">cypher</a>{' '}
      <a help-topic="create-index-on">CREATE INDEX FOR</a>
    </p>
  </BuiltInGuideSidebarSlide>,
  <BuiltInGuideSidebarSlide key="s5">
    <h3>Find</h3>
    <p className="lead">
      <em>Find individual nodes</em>
    </p>
    <ol>
      <li>Run any of the following query examples.</li>
      <li>Notice the syntax pattern.</li>
      <li>Try looking for other movies or actors.</li>
    </ol>
    <hr />
    <ul className="undecorated">
      <li>
        {`Find the actor named "Tom Hanks"`}:
        <pre className="pre-scrollable code runnable">
          {'MATCH (tom:Person {name: "Tom Hanks"}) RETURN tom'}
        </pre>
      </li>
      <li>
        {`Find the movie with title "Cloud Atlas":`}
        <pre className="pre-scrollable code runnable">
          {'MATCH (cloudAtlas:Movie {title: "Cloud Atlas"}) RETURN cloudAtlas'}
        </pre>
      </li>
      <li>
        {' '}
        Find 10 people and return their names:
        <pre className="pre-scrollable code runnable">
          MATCH (people:Person) RETURN people.name LIMIT 10
        </pre>
      </li>
      <li>
        Find movies released in the 1990s and return their titles.
        <pre className="pre-scrollable code runnable">
          {
            'MATCH (nineties:Movie) WHERE nineties.released >= 1990 AND nineties.released < 2000 RETURN nineties.title'
          }
        </pre>
      </li>
    </ul>
    <hr />
    <p>
      <a help-topic="help">:help</a> <a help-topic="match">MATCH</a>{' '}
      <a help-topic="where">WHERE</a> <a help-topic="return">RETURN</a>
    </p>
  </BuiltInGuideSidebarSlide>,
  <BuiltInGuideSidebarSlide key="s6">
    <h3>Query</h3>
    <p className="lead">
      <em>Find patterns</em>
    </p>
    <p>
      Use the type of the relationship to find patterns within the graph, for
      example, <code>ACTED_IN</code> or <code>DIRECTED</code>. What other
      relationships exist?
    </p>
    <hr />
    <ul className="undecorated">
      <li>
        What movies did Tom Hanks act in?
        <pre className="pre-scrollable code runnable">
          {
            'MATCH (tom:Person {name: "Tom Hanks"})-[:ACTED_IN]->(tomHanksMovies) RETURN tom,tomHanksMovies'
          }
        </pre>
      </li>
      <li>
        {`Who directed "Cloud Atlas"?`}
        <pre className="pre-scrollable code runnable">
          {
            'MATCH (cloudAtlas:Movie {title: "Cloud Atlas"})<-[:DIRECTED]-(directors) RETURN directors.name'
          }
        </pre>
      </li>
      <li>
        {`Who were Tom Hanks' co-actors?`}
        <pre className="pre-scrollable code runnable">
          {
            'MATCH (tom:Person {name:"Tom Hanks"})-[:ACTED_IN]->(m)<-[:ACTED_IN]-(coActors) RETURN DISTINCT coActors.name'
          }
        </pre>
      </li>
      <li>
        {`How people are related to "Cloud Atlas"?`}
        <pre className="pre-scrollable code runnable">
          {
            'MATCH (people:Person)-[relatedTo]-(:Movie {title: "Cloud Atlas"}) RETURN people.name, Type(relatedTo), relatedTo.roles'
          }
        </pre>
      </li>
    </ul>
    <hr />
    <p>
      <a help-topic="help">:help</a> <a help-topic="match">MATCH</a>{' '}
      <a help-topic="return">RETURN</a>
    </p>
  </BuiltInGuideSidebarSlide>,
  <BuiltInGuideSidebarSlide key="s7">
    <h3>Solve</h3>
    <p className="lead">
      <em>Six Degrees of Kevin Bacon</em>
    </p>
    <p>
      {`You might have heard of the classic "Six Degrees of Kevin Bacon". That is simply the shortest path between two nodes, called the "Bacon Path".`}
    </p>
    <hr />
    <ul className="undecorated">
      <li>
        {`Use variable length patterns to find movies and actors up to 4 "hops" away from Kevin Bacon.`}
        <pre className="pre-scrollable code runnable">
          {`MATCH (bacon:Person {name:"Kevin Bacon"})-[*1..4]-(hollywood)
RETURN DISTINCT hollywood`}
        </pre>
      </li>
      <li>
        Use the built-in <code>shortestPath()</code>
        {` algorithm to find the
        "Bacon Path" to Meg Ryan.`}
        <pre className="pre-scrollable code runnable">
          {`MATCH p=shortestPath(
(bacon:Person {name:"Kevin Bacon"})-[*]-(meg:Person {name:"Meg Ryan"})
)
RETURN p`}
        </pre>
      </li>
    </ul>
    <hr />
    <p>
      <a help-topic="help">:help</a> <a help-topic="match">MATCH</a>{' '}
      <a help-topic="return">RETURN</a>
    </p>
  </BuiltInGuideSidebarSlide>,
  <BuiltInGuideSidebarSlide key="s8">
    <h3>Recommend</h3>
    <p className="lead">
      <em>Recommend new co-actors</em>
    </p>
    <p>
      {`Let's recommend new co-actors for Tom Hanks. A basic recommendation approach is to find connections past an immediate neighborhood that are themselves well connected.`}
    </p>
    <hr />
    <p>For Tom Hanks, that means:</p>
    <ol>
      <li>
        Extend Tom Hanks co-actors to find co-co-actors who have nоt worked with
        Tom Hanks.
        <pre className="pre-scrollable code runnable">
          {`MATCH (tom:Person {name:"Tom Hanks"})-[:ACTED_IN]->(m)<-[:ACTED_IN]-(coActors),
    (coActors)-[:ACTED_IN]->(m2)<-[:ACTED_IN]-(cocoActors)
  WHERE NOT (tom)-[:ACTED_IN]->()<-[:ACTED_IN]-(cocoActors) AND tom <> cocoActors
  RETURN cocoActors.name AS Recommended, count(*) AS Strength ORDER BY Strength DESC`}
        </pre>
      </li>
      <li>
        Find someone who can introduce Tom Hanks to his potential co-actor, in
        this case Tom Cruise.
        <pre className="pre-scrollable code runnable">
          {`MATCH (tom:Person {name:"Tom Hanks"})-[:ACTED_IN]->(m)<-[:ACTED_IN]-(coActors),
  (coActors)-[:ACTED_IN]->(m2)<-[:ACTED_IN]-(cruise:Person {name:"Tom Cruise"})
RETURN tom, m, coActors, m2, cruise`}
        </pre>
      </li>
    </ol>
    <hr />
    <p>
      <a help-topic="help">:help</a> <a help-topic="match">MATCH</a>{' '}
      <a help-topic="return">RETURN</a>
    </p>
  </BuiltInGuideSidebarSlide>,
  <BuiltInGuideSidebarSlide key="s9">
    <h3>Clean up</h3>
    <p className="lead">
      <em>Remove the movie data set</em>
    </p>
    <p>When you are done experimenting, you can clean up your graph.</p>
    <p>
      <b>NOTE: </b>Nodes cannot be deleted if they have relationships, so you
      need to detach the nodes to delete them.{' '}
    </p>
    <hr />
    <ol>
      <li>
        Delete all <code>Movie</code> and <code>Person</code> nodes, and their
        relationships.
        <pre className="pre-scrollable code runnable">
          MATCH (n) DETACH DELETE n
        </pre>
      </li>
      <li>
        Verify that the Movie Graph has been removed.
        <pre className="pre-scrollable code runnable">MATCH (n) RETURN n</pre>
      </li>
    </ol>
    <hr />
    <p>
      <a help-topic="help">:help</a> <a help-topic="delete">DELETE</a>{' '}
    </p>
  </BuiltInGuideSidebarSlide>,
  <BuiltInGuideSidebarSlide key="s10">
    <h3>Next steps</h3>
    <ul className="undecorated">
      <li>
        <a data-exec="guide northwind-graph">Northwind Graph</a> – from RDBMS to
        graph.
      </li>
      <li>
        <DrawerExternalLink href="https://portal.graphgist.org/">
          Explore more guides: Graph Gists Portal
        </DrawerExternalLink>
      </li>
    </ul>
    <br />
    <h3>Documentation</h3>
    <ul className="undecorated">
      <li>
        <ManualLink chapter="cypher-manual" page="/">
          Neo4j Cypher Manual
        </ManualLink>
      </li>
      <li>
        <ManualLink chapter="cypher-refcard" page="/">
          Cypher Refcard
        </ManualLink>
      </li>
      <li>
        <DrawerExternalLink href="https://neo4j.com/developer/">
          Developer resources
        </DrawerExternalLink>
      </li>
    </ul>
  </BuiltInGuideSidebarSlide>
]

export default { title, category, identifier, slides }
