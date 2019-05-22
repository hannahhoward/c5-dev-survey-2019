// Import React
import React from 'react'
import '../assets/prism-tomorrow-ally.css'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes
} from 'spectacle'

import AboutMeSlide from './slideTemplates/about-me-slide.jsx'
import QuoteSlide from './slideTemplates/quote-slide.jsx'
import DefinitionSlide from './slideTemplates/definition-slide.jsx'
import ListSlide from './slideTemplates/list-slide.jsx'
import SimpleSlide from './slideTemplates/simple-slide.jsx'
import ConceptSlide from './slideTemplates/concept-slide.jsx'
import ImageSlide from './slideTemplates/image-slide.jsx'
import DoubleImageSlide from './slideTemplates/double-image-slide.jsx'
import QuotesSlide from './slideTemplates/quotes-slide.jsx'
import SentimeterSlide from './slideTemplates/sentimeter-slide'
import colors from './slideTemplates/colors'
import CodeSlide from 'spectacle-code-slide'

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'
preloader({})
// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')
// use colors in slideTemplates/colors.js to construct theme
const theme = createTheme(colors, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
})

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <AboutMeSlide>
          <Notes>
            <p>
              This is just the introductory slide I use, we can remake for our
              own purposes.
            </p>
            <p>
              Note for all slides you can use a notes tag in children to
              specific presenter notes, and those notes support HTML
            </p>
          </Notes>
        </AboutMeSlide>
        <SimpleSlide
          inverted
          statement={
            <span>
              Good
              <br />
              Morning
            </span>
          }
        >
          <Notes>Good morning everyone. So I have a question...</Notes>
        </SimpleSlide>
        <ImageSlide
          inverted
          title={
            <span>
              What's hot with <br /> C5 devs right now?
            </span>
          }
          image="mugatu.jpg"
        />
        <SimpleSlide inverted statement="But seriously...">
          <Notes>
            <p>
              Ok, so we're here at summit as a group, and we're in the same room
              all day. At great cost in unbillable hours.
            </p>
            <p>
              So if you're new here, I'd encourage you to use this day to it's
              fullest. And I encourage you to think about these two questions
              throughout the day.
            </p>
          </Notes>
        </SimpleSlide>
        <ConceptSlide
          inverted
          concept="Question 1"
          description="What makes a C5 developer a C5 developer?"
        >
          <Notes>
            <p>
              First, what is unique about a C5 developer? What are we into as a
              company?
            </p>
          </Notes>
        </ConceptSlide>
        <ConceptSlide
          inverted
          concept="Question 2"
          description="How do I become a better C5 developer?"
        >
          <Notes>
            <p>
              Second, this is basically a full day of pro-dev. SO while it's
              probably tempting to tweet your way through boredom and a
              hangover, my recommendation is that you use this day to think
              about how you want to grow as a developer. You may not actually
              learn everything today, but hopefully you figure out what you're
              most interested in learning.
            </p>
          </Notes>
        </ConceptSlide>
        <ListSlide
          inverted
          appear={true}
          title="Outline!"
          ordered={true}
          list={[
            "What's this new tool and where did it come from?",
            'Big learnings',
            'Little learnings',
            'Random funny things',
            'How to learn more!'
          ]}
        />
        <DefinitionSlide
          fit={false}
          term="Sentimeter"
          definition="Every tool needs an origin story"
        >
          <Notes>
            So before we dive in we want to tell you a little bit about the tool
            we built to run the dev survey this year.
          </Notes>
        </DefinitionSlide>
        <ImageSlide title="Nicole" image="nicole.png">
          <Notes>
            And to do that I want to turn it over to Nicole for a minute.
          </Notes>
        </ImageSlide>
        <SimpleSlide statement="Key learnings">
          <Notes>Zoe insert your stuff here</Notes>
        </SimpleSlide>
        <SentimeterSlide>
          <Notes>
            There are terrible hacks to make this work but look we can just have
            a slide that brings up the live report - Just use SentimeterSlide
            wherever you want to interact with the app
          </Notes>
        </SentimeterSlide>
        <SimpleSlide statement="Other points of interest">
          <Notes>Zoe insert other points of interest here</Notes>
        </SimpleSlide>
        <SimpleSlide statement="Some jokes">
          <Notes>
            something about block chain and angular maybe, maybe a few funny
            quotes
          </Notes>
        </SimpleSlide>
        <SimpleSlide
          fit={false}
          statement="How to make your own Sentimeters!"
        />
        <DefinitionSlide
          inverted
          term="http://sentimeter.carbonfive.com/surveys"
          definition="Who knew it was that easy? (eek!)"
        />
        <DefinitionSlide
          inverted
          term="http://sentimeter.carbonfive.com/trends"
          definition="Make your own trends"
        />
        <SimpleSlide inverted statement="#NoSecurity" />
        <SimpleSlide inverted statement="JK. Auth Coming Soon" />
        <ConceptSlide
          inverted
          concept="Get Involved"
          description="#sentimeter on Slack"
        />
        <SimpleSlide statement="That's it!" />
      </Deck>
    )
  }
}
