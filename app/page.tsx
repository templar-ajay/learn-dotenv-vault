export default function Page() {
  return (
    <h1>
      Hello {process.env.NEXT_PUBLIC_HELLO}, your balance is{" "}
      {process.env.BALANCE}
    </h1>
  );
}
