import styles from "./page.module.css";
import { Heading } from "@/app/Heading";
import { css } from "../../styled-system/css";

export default function Home() {
    return (
        <main className={styles.main}>
            <Heading size="2xs">
                Title
            </Heading>
            <p className={css({
                fontSize: "2xs"
            })}>Test text</p>
        </main>
    );
}
