import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Alltrueisms</Title>
      <h1>Alltrueisms</h1> 
       <h2>Tuesday Wells Kay</h2> 
            <h3>Pardon our appearance ... while we freshen up</h3> 
      <Counter />
      <p>
        Visit us on instagram!{" "}
        <a href="https://www.instagram.com/alltrueisms/" target="_blank">
          https://www.instagram.com/alltrueisms/
        </a>{" "}
        contact: alltrueisms@gmail.com
      </p>
    </main>
  );
}
