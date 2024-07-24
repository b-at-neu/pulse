export function Bar({
  data
}: {
  data: [
    {
      data: string;
      width: string;
    }
  ];
}) {
  return (
    <div className="w-full h-8 border rounded-lg bg-muted">
      {data.map(({ data, width }, i) => (
        <div key={i} className={width}>
          {data}
        </div>
      ))}
    </div>
  );
}
