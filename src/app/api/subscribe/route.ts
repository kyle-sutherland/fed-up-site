import axios from "axios";
import { z } from "zod";

// Email validation schema
const EmailSchema = z
  .string()
  .email({ message: "Please enter a valid email address" });

// Handle POST request
export async function POST(request: Request): Promise<Response> {
  try {
    // 1. Parse the request JSON
    const body = await request.json();
    // console.log("Request Body:", body);
    // 2. Validate email address
    const emailValidation = EmailSchema.safeParse(body.email);
    if (!emailValidation.success) {
      return new Response(
        JSON.stringify({ error: "Please enter a valid email address" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 3. Retrieve Mailchimp credentials
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const API_SERVER = process.env.MAILCHIMP_API_SERVER;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    // 4. Construct Mailchimp API request URL
    const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    // 5. Prepare request data
    const data = {
      email_address: emailValidation.data,
      status: "subscribed",
    };

    // 6. Set request options
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `apikey ${API_KEY}`,
      },
    };
    // console.log("Mailchimp URL:", url);
    // console.log("Headers:", options.headers);
    // 7. Send POST request to Mailchimp API
    const response = await axios.post(url, data, options);

    if (response.status === 200) {
      return new Response(
        JSON.stringify({ message: "Awesome! You have successfully subscribed!" }),
        { status: 201, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (error) {
    console.error("Error Occurred:", error); // Log the full error object
    if (axios.isAxiosError(error)) {
      console.error("Axios Error Details:", error.toJSON());
      console.error("Response Data:", error.response?.data);
      console.error("Status Code:", error.response?.status);
      console.error("Headers:", error.response?.headers);

      // console.error(
      //   `${error.response?.status}`,
      //   `${error.response?.data.title}`,
      //   `${error.response?.data.detail}`
      // );

      if (error.response?.data.title === "Member Exists") {
        return new Response(
          JSON.stringify({
            error: "Uh oh, it looks like this email's already subscribed🧐",
          }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    return new Response(
      JSON.stringify({
        error:
          "Oops! There was an error subscribing you to the newsletter.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  return new Response(
    JSON.stringify({ error: "Unexpected error occurred." }),
    { status: 500, headers: { "Content-Type": "application/json" } }
  );

}