import Header from './components/Header'
import NewsletterForm from './components/NewsletterForm'
import { Fade } from 'react-awesome-reveal'
import Image from 'next/image'
import Link from 'next/link'

export default function Home () {
  return (<main className="min-h-screen bg-lime-300 py-10">
    <div className="container items-center mx-auto px-4 max-w-6xl">
      <Header/>
      {/*<Fade cascade duration={1200} damping={0.1} fraction={0.1}>*/}
      {/* About the Campaign */}
      <section className="section">
        <div className="section-title">
          <h2>
          About the FedUp Campaign
        </h2>
        </div>
        <div className={'content-card'}>
          <div>
            <p className="paragraph">
              FedUp Concordia is a student-led movement dedicated to improving
              food services on campus. We believe that students deserve access
              to healthy, ethical, and affordable food options that align with
              our values of sustainability and social justice.
            </p>
            <p className="paragraph">
              Our campaign began in response to widespread dissatisfaction with
              Aramark, the current food service provider. In November 2024, 83%
              of Concordia students voted in favor of replacing Aramark with a
              student-led, community-driven alternative.
            </p>
            <p className="paragraph">
              Join us in creating a better food system for Concordia!
            </p>
          </div>
        </div>
      </section>

      {/* Why We're FedUp */}
      <section className="section">
        <div className="section-title"><h2>
          Why We're FedUp
        </h2></div>
        <div className={'content-card'}>
            <p className="paragraph">
              Aramark has a history of using prison labor, providing
              poor-quality food, and ignoring student concerns. Concordia
              deserves better!
            </p>
            <p className="paragraph">
              Join us in demanding a student-led, ethical, and sustainable food
              system on campus.
            </p>
          <p className="paragraph">
            Aramark’s presence on campus has led to numerous issues, including:
          </p>
          <ul className="list">
            <li>
              Poor food quality, with reports of raw chicken, moldy fruit, and
              bugs in meals.
            </li>
            <li>
              High prices for low-quality food, especially for students on meal
              plans.
            </li>
            <li>
              Exploitation of prison labor in the U.S., which contradicts our
              values.
            </li>
            <li>
              Lack of transparency and accountability in food service
              operations.
            </li>
          </ul>
          <p className="paragraph">
            These issues are unacceptable, and we’re fighting to replace Aramark
            with a better alternative.
          </p></div>
      </section>

      {/* Our Vision */}
      <section className="section">
        <div className="section-title"><h2>Our Vision</h2></div>
        <div className={'bg-lime-400 shadow-lg py-6'}>
          <p className="paragraph">We envision a campus where:</p>
          <ul className="list">
            <li>Food is fresh, nutritious, and sustainably sourced.</li>
            <li>Students have a say in how food services are run.</li>
            <li>Local businesses and cooperatives are supported.</li>
            <li>No one has to choose between affordability and quality.</li>
          </ul>
          <p className="paragraph">
            Together, we can make this vision a reality. Learn more about <Link href={"https://equi-table.ca/"}>Equi-table Consortium</Link>, an alternative for the future of food services on campus.
          </p>

        </div>
        <div className="relative h-[400px] rounded-b-lg shadow-lg">
        <Image
          src={"/vegetables-1085063_1280.jpg"}
          alt={"vegetables"}
          fill
          className="object-cover rounded-b-lg"
        />
      </div>
      </section>

      {/*/!* Success Stories *!/*/}
      {/*<section className="section">*/}
      {/*  <h2 className="section-title">*/}
      {/*    Success Stories*/}
      {/*  </h2>*/}
      {/*  <p className="paragraph">*/}
      {/*    Other universities have shown that change is possible. For example:*/}
      {/*  </p>*/}
      {/*  <ul className="list">*/}
      {/*    <li>*/}
      {/*      <strong>University of Winnipeg</strong> replaced their corporate*/}
      {/*      food provider with a student-led, community-driven model,*/}
      {/*      resulting in higher-quality food and stronger local partnerships.*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      <strong>McGill University</strong> has implemented sustainable*/}
      {/*      food initiatives, such as urban agriculture projects and*/}
      {/*      partnerships with local farms.*/}
      {/*    </li>*/}
      {/*  </ul>*/}
      {/*  <p className="paragraph">*/}
      {/*    These success stories prove that a better food system is*/}
      {/*    possible—and Concordia can be next!*/}
      {/*  </p>*/}
      {/*</section>*/}

      {/* Take Action */}
      <section className="section">
        <div className="section-title"><h2>How You Can Help</h2></div>
        <div className={'content-card'}>
          <p className="paragraph">
            Visit the links below to:
          </p>
          <div className={'list'}>
            <ul className="list-disc list-inside text-pink-900">
              <li className={"mt-2"}>
                <a
                  href="https://www.concordia.ca/campus-life/food-services/contact-us/feedback-form.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Give feedback directly about the food on campus
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfaWHo2Bo2QAe-vSMlQi0O9nhV6FAWnMXMDr-HI2rKBjMh46g/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fill out a short survey about your experience with the food on campus
                </a>
              </li>
              <li className={"mt-2"}>
                <a
                  href="https://instagram.com/fedupconcordia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow us on Instagram
                </a>
              </li>
            </ul>
          </div>
          <p className="paragraph">
            Your support is crucial to the success of this campaign. Here’s how
            you can get involved:
          </p>
          <ul className="list">
            <li>
              <strong>Vote in the CSU by-elections</strong> to support our
              referendum question.
            </li>
            <li>
              <strong>Spread the word</strong> by sharing our campaign on social
              media.
            </li>
            <li>
              <strong>Join our team</strong> by visiting our <Link href={"https://linktr.ee/fedupconcordia"}>Linktree</Link> or
              messaging us on Instagram.
            </li>
            <li>
              <strong>Give feedback</strong> about your experiences with campus
              food services.
            </li>
          </ul>
          <p className="paragraph">
            Together, we can create a campus food system that works for
            everyone.
          </p></div>
      </section>

      {/* Newsletter */}
      <section className="section" id="newsletter">
        <div className="section-title"><h2>
          Stay Updated
        </h2></div>
        <div className={'content-card'}>

          <p className="paragraph">
            Sign up for our newsletter to stay informed about the campaign:
          </p>
          <NewsletterForm/></div>
      </section>

      {/* Call to Action */}
      <section className="section text-center">
        <h2 className="text-pink-950 text-3xl p-6">
          Join the Movement
        </h2>
        <p className="text-pink-950 mb-6 text-xl">
          Together, we can take control of our campus food services and create
          a model that benefits everyone. Let’s demand good food for all!
        </p>
        <a
          href="https://linktr.ee/fedupconcordia"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Get Involved Today
        </a>
      </section>
      {/*</Fade>*/}
    </div>
  </main>)
}
