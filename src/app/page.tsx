import Header from "./components/Header";
import NewsletterForm from "./components/NewsletterForm";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen main-body py-10">
      <div className="container items-center mx-auto px-4 max-w-6xl">
        <Header />
        <Fade cascade duration={1200} damping={0.1} fraction={0.1}>
          {/* About the Campaign */}
          <section className="section">
            <div className="section-title">
              <h2>About the FedUp Campaign</h2>
            </div>
            <div className={"content-card"}>
              <div>
                <p className="paragraph">
                  FedUp is dedicated to improving food services at Concordia.
                  We’re fighting to replace Aramark, the university’s current
                  food service provider. Our solution?{" "}
                  <b>
                    A community-owned, student-led social enterprise that
                    supports the local economy.{" "}
                  </b>
                </p>
                <p className="paragraph">
                  In November 2024, we introduced a ballot measure to mandate
                  the Concordia Student Union to support our agenda.
                  <b>83% of Concordia undergraduate students voted in favor.</b>
                </p>
                <p className="paragraph">
                  <Link href={"https://linktr.ee/fedupconcordia"}>
                    Join us in creating a better food system for Concordia!
                  </Link>
                </p>
              </div>
            </div>
          </section>

          {/* Why We're FedUp */}
          <section className="section">
            <div className="section-title">
              <h2>Why We're FedUp with Aramark</h2>
            </div>
            <div className={"content-card"}>
              <p className="paragraph">
                Aramark is a food service multinational that specializes in
                poor-quality, overpriced cuisine. They under-value and under-pay
                the staff who work at their facilities on campus, and they use
                prison labor to process their ingredients.
              </p>
              <p className="paragraph">
                Aramark controls all the dining halls and many of the eateries
                at Concordia. Students who live in residence are forced to pay
                over $6000 for Aramark meal plans. What do they get in return?
                We’ve heard reports of students finding raw chicken, moldy
                fruit, bugs, and staples in their food.
              </p>
              <p className="paragraph">
                Despite all these pressing issues, the university plans to renew
                its contract with Aramark.
              </p>
            </div>
          </section>

          {/* Solution */}
          <section className="section">
            <div className="section-title">
              <h2>What's the Solution?</h2>
            </div>
            <div className={"content-card"}>
              <p className="paragraph">
                We're a part of a coalition to replace Aramark’s dining halls
                and eateries with a community-owned, student-led social
                enterprise at Concordia. This initiative is called EquiTable.
              </p>
              <p className="paragraph">
                EquiTable will be a multi-stakeholder nonprofit governed by a
                Board of Directors. There will be board seats reserved for food
                advocacy groups, social economy actors, workers, students,
                faculty, and the community at large.
              </p>
              <p className="paragraph">
                <Link href="https://ugc.production.linktr.ee/aa95a705-4399-4c29-bcd9-c5a28f43ec8d_NFE-Proposal-for-Students.pdf">
                  Learn more about EquiTable (fka New Food Enterprise) here.
                </Link>
              </p>
            </div>
          </section>

          {/* Newsletter */}
          <section className="section" id="newsletter">
            <div className="section-title">
              <h2>Stay Updated</h2>
            </div>
            <div className={"content-card"}>
              <p className="paragraph">
                Sign up for our newsletter to stay informed about the campaign:
              </p>
              <NewsletterForm />
            </div>
          </section>

          <a
            href="https://linktr.ee/fedupconcordia"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Get Involved Today
          </a>
        </Fade>
      </div>
    </main>
  );
}
