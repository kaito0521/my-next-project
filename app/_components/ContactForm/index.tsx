"use client";

import { createContactData } from "@/app/_actions/contact";
import { useFormState } from "react-dom";
import styles from "./index.module.css";

const initialState = {
  status: "",
  message: "",
};

export default function ContactForm() {
  const [state, formAction] =
useFormState(createContactData, initialState);
  console.log(state);
  if (state.status === "success") {
    return (
      <p className={styles.success}>
        お問い合わせいただき、ありがとうございます。
        <br />
        お返事までしばらくお待ちください
      </p>
    );
  }

  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.horizontal}>
        <div className={styles.item}>
          <label htmlFor="lastName" className={styles.label}>姓</label>
          <input type="text" id="lastName" name="lastName" className={styles.textfield} />
        </div>
        <div className={styles.item}>
          <label htmlFor="firstName" className={styles.label}>名</label>
          <input type="text" id="firstName" name="firstName" className={styles.textfield} />
        </div>
      </div>
      <div className={styles.item}>
        <label htmlFor="company" className={styles.label}>会社名</label>
        <input type="text" id="company" name="company" className={styles.textfield} />
      </div>
      <div className={styles.item}>
        <label htmlFor="email" className={styles.label}>メールアドレス</label>
        <input type="text" id="email" name="email" className={styles.textfield} />
      </div>
      <div className={styles.item}>
        <label htmlFor="message" className={styles.label}>メッセージ</label>
        <textarea id="message" name="message" className={styles.textfield}></textarea>
      </div>
      <div className={styles.actions}>
        {state.status === "error" && (
          <p className={styles.error}>{state.message}</p>
        )}
        <input type="submit" value="送信する" className={styles.button} />
      </div>
    </form>
  );
}
