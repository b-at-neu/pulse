export function Bar({
  data
}: {
  data: [
    {
      data: string;
      width: number;
    }
  ];
}) {
  return (
    <div className="w-full h-8 border rounded-lg bg-muted">
      {data.map((v, i) => (
        <div key={i}></div>
      ))}
    </div>
  );
}
