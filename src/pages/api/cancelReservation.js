/**
 * Next.js API route support: https://nextjs.org/docs/api-routes/introduction
 * @param req {import('next').NextApiRequest}
 * @param res {import('next').NextApiResponse}
 */

export default async function handler(req, res) {
  // 1.
  // Perform a GET request to read the specific reservation from the database
  fetch(`https://rlehxrvqxyjehqjncwhs.supabase.co/rest/v1/foofest/${req.query}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  // 2.
  // Implement the reservation canceling logic
  // Return true if
  // the reseravtionID exists
  // and if the provided email matches any of the attendees' email.

  // 3.
  // if true is returned.
  // Perform a POST request that edits the the reservation and deletes the row in databse

  return res.status(200).json({ response });
}
