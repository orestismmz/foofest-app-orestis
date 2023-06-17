import { useRouter } from "next/router";
import styles from "../../Booking.module.css";
import handler from "@/pages/api/cancelReservation";

export default function Cancelation() {
  const router = useRouter();
  const { id } = router.query;

  function handleSubmit(e) {
    e.preventDefault();
    const reservationEmail = e.target.reservationEmail.value;
    handler(id, reservationEmail);
  }

  return (
    <div className={styles.cancelWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Cancel Reservation</h1>
        <h3 className={styles.cancelH3}>
          Reservation ID: <span className={styles.id}>{id}</span>
        </h3>
        <p className={styles.cancelP}>
          Please provide the reservation email to confirm the cancelation
        </p>
        <label className={styles.cancelLabel}>
          {" "}
          Reservation email:
          <input
            className={styles.cancelInput}
            type="email"
            name="reservationEmail"
            required
          ></input>
        </label>
        <button className={styles.cancelButton} type="submit">
          Confirm
        </button>
      </form>
    </div>
  );
}
