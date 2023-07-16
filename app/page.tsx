export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* USE ARBITRARY VALUE TO CREATE CUSTOM VALUE */}
      <ul className="bg-[blue]">
        {/* USE ARBITRARY VARIANT TO CREATE CUSTOM CLASS */}
        <li className="[&:nth-child(2)]:text-red-500">1</li>
        <li className="[&:nth-child(2)]:text-red-500">2</li>
        <li className="[&:nth-child(2)]:text-red-500">3</li>
      </ul>
    </main>
  );
}
