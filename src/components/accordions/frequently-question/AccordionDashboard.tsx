import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionDashboard() {
  return (
    <>
      <Accordion>
        <AccordionSummary
          className="text-gray-700 font-bold text-lg sm:text-xl"
          expandIcon={<ExpandMoreIcon />}
        >
          What is Ahorapulse?
        </AccordionSummary>

        <AccordionDetails
          aria-controls="panel1d-content"
          id="panel1d-header"
          className="space-y-3 text-base"
        >
          <p>
            Agorapulse is a top player in social media management, known for its
            award-winning platform and industry-leading customer support. But
            we're more than just accolades. Our Social ROI feature goes a step
            further, allowing users to measure the real business impact of their
            organic social media efforts, beyond just engagement metrics.
          </p>

          <p>
            Diving into the details, our user-friendly dashboard equips
            businesses, agencies, and marketers with the tools to schedule
            posts, monitor social conversations, engage with followers, and
            analyze performance seamlessly. Whether you're a small business or a
            large enterprise, Agorapulse has tailored solutions to fit your
            brand's needs.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          className="text-gray-700 font-bold text-lg sm:text-xl"
          expandIcon={<ExpandMoreIcon />}
        >
          How is Agorapulse diffenrent from other social media management tools?
        </AccordionSummary>

        <AccordionDetails
          aria-controls="panel2d-content"
          id="panel2d-header"
          className="space-y-3 text-base"
        >
          <p>
            Where do we even start? Agorapulse offers teams and marketers a more
            streamlined workflow, more features, and more support at a more
            affordable price than other popular tools like{" "}
            <a
              href="https://www.agorapulse.com/hootsuite-alternatives/"
              target="_blank"
              className="text-orange-600"
            >
              Hootsuite™
            </a>{" "}
            or{" "}
            <a
              href="https://www.agorapulse.com/blog/social-media-management-tools/agorapulse-vs-sprout-social/"
              target="_blank"
              className="text-orange-600"
            >
              Sprout Social™
            </a>
          </p>

          <p>
            Plus, with the #1 customer support team in the industry, Agorapulse
            users routinely receive fast, thorough support and even
            opportunities to request features, leave feedback, and help us
            improve our tool.
          </p>

          <p>
            To date, we've won awards from third-party review sites like G2,
            Capterra, and TrustRadius in critical categories, such as:
          </p>

          <ul className="list-disc ml-8">
            <li>Estimated social media ROI</li>
            <li>Usability</li>
            <li>Results</li>
            <li>Audience engagement analysis</li>
            <li>User satisfaction</li>
            <li>Ease of setup</li>
          </ul>

          <p>
            Currently, we're also the only social media management scheduling
            tool that allows you to quickly and easily track sales, traffic, and
            leads generated from your organic social media posts so you can make
            data-driven decisions.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          className="text-gray-700 font-bold text-lg sm:text-xl"
          expandIcon={<ExpandMoreIcon />}
        >
          Who's Agorapulse for?
        </AccordionSummary>

        <AccordionDetails
          aria-controls="panel3d-content"
          id="panel3d-header"
          className="space-y-3 text-base"
        >
          <p>
            Agorapulse is for businesses of all sizes, social media managers,
            digital marketers, and agencies looking for a comprehensive tool to
            manage multiple social media accounts. Whether you're a solopreneur,
            a growing start-up, or a large enterprise with complex social media
            needs, Agorapulse can help you accelerate your workflow and optimize
            your social media performance.
          </p>

          <a
            href="https://www.agorapulse.com/blog/success-stories/"
            target="_blank"
            className="text-orange-600"
          >
            Click here to start your free account.
          </a>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          className="text-gray-700 font-bold text-lg sm:text-xl"
          expandIcon={<ExpandMoreIcon />}
        >
          Can I use Ahorapulse for free?
        </AccordionSummary>

        <AccordionDetails
          aria-controls="panel4d-content"
          id="panel4d-header"
          className="space-y-3 text-base"
        >
          <p>
            Yes. Our Free plan allows you to create one user and 3 social
            profiles. Features include:
          </p>

          <ul className="list-disc ml-8">
            <li>10 scheduled posts</li>
            <li>Basic social Inbox</li>
            <li>Basic reporting</li>
            <li>Limited Social Media ROI report</li>
            <li>Mobile app</li>
          </ul>

          <a
            href="https://app.agorapulse.com/auth/signup?plan=free&language=en&_gl=1*98o9gn*_gcl_au*MTE3Mjg2MDM5MC4xNzQ1Mzg0NDQ3*_ga*ODEzMDE2MDM2LjE3NDUzODQ0NDg.*_ga_SJNESWBV5Q*czE3NDc1NzMxMjEkbzE1JGcxJHQxNzQ3NTczMjAzJGo0OSRsMCRoMCRkR091OThPaHJ6R2RxQi1UaUNDYS1aWnF1N292NDhJTTlsZw.."
            target="_blank"
            className="text-orange-600"
          >
            Click here to start your free account.
          </a>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
