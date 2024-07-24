import { Title } from "@/components/ui/title";

export default function Page() {
  const data = {
    id: 'e80a33c3-1395-4b5f-8522-3f4c75b8c5a0',
    firstName: 'Alice',
    lastName: 'Smith',
    applicationReceived: true,
    depositPaid: false,
    topLocker: true,
    class: '7b',
    locker: '#131',
    lock: 987654321
  };

  return (
    <>
      <Title>
        {data.lastName}, {data.firstName} ({data.class})
      </Title>

      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        <div>LOCKERS</div>

        <div>LOCKS</div>

        <div>CLASS</div>

        <div>MEMBERSHIP</div>
      </div>
    </>
  );
}
