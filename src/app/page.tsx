import { css } from "../../styled-system/css";
export default function Home() {
  return (
    <main>
      <p className={css({
        textAlign: "left"
      })}>left text</p>
      <p className={css({
        textAlign: "right"
      })}>right text</p>
      <p className={css({
        textAlign: "start"
      })}>start text</p>
      <p className={css({
        textAlign: "end"
      })}>end text</p>
    </main>
  );
}
